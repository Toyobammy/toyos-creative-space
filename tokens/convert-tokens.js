const fs = require('fs');
const path = require('path');

// Helper to convert string to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

// Helper to resolve token aliases like "{color.palette.primary.100}"
function resolveAlias(alias, rootTokens) {
  if (typeof alias !== 'string' || !alias.startsWith('{') || !alias.endsWith('}')) {
    return alias;
  }
  
  const pathParts = alias.slice(1, -1).split('.');
  let current = rootTokens;
  for (const part of pathParts) {
    if (current[part] !== undefined) {
      current = current[part];
    } else {
      return alias; // Could not resolve
    }
  }
  
  // Recursively resolve in case an alias points to another alias
  return resolveAlias(current, rootTokens);
}

function processTokens(obj, rootTokens, currentPath = [], variables = []) {
  if (typeof obj !== 'object' || obj === null) return variables;

  // 1. Figma tokens often use a "value" wrapper
  if ('value' in obj) {
    let value = obj.value;
    if (typeof value === 'object' && value !== null) {
      for (const [subKey, subValue] of Object.entries(value)) {
        const varName = `--${[...currentPath, subKey].map(toKebabCase).join('-')}`;
        let finalValue = resolveAlias(subValue, rootTokens);
        if (typeof finalValue === 'number' && finalValue !== 0 && subKey !== 'fontWeight') {
          finalValue = `${finalValue}px`;
        }
        variables.push(`${varName}: ${finalValue};`);
      }
    } else {
      const varName = `--${currentPath.map(toKebabCase).join('-')}`;
      let finalValue = resolveAlias(value, rootTokens);
      if (obj.type === 'dimension' && typeof finalValue === 'number' && finalValue !== 0) {
        finalValue = `${finalValue}px`;
      }
      variables.push(`${varName}: ${finalValue};`);
    }
    return variables;
  }

  // Iterate over nested objects
  for (const [key, val] of Object.entries(obj)) {
    const lowerKey = key.toLowerCase();
    
    // Filter out primitive colors, use only color roles
    if (lowerKey.includes('primitive') || lowerKey === 'key' || lowerKey === 'palette') {
      continue;
    }
    
    if (['description', 'type', 'extensions', '$type', '$description'].includes(key)) {
      continue;
    }
    
    // 2. Simple Key-Value tokens (where values are directly strings/numbers, not wrapped in {value: ...})
    if (typeof val === 'string' || typeof val === 'number') {
      const varName = `--${[...currentPath, key].map(toKebabCase).join('-')}`;
      let finalValue = resolveAlias(val, rootTokens);
      variables.push(`${varName}: ${finalValue};`);
    } else if (typeof val === 'object' && val !== null) {
      processTokens(val, rootTokens, [...currentPath, key], variables);
    }
  }

  return variables;
}

function generateCSS() {
  let cssLines = [':root {'];
  let darkThemeLines = [];

  // Process Typography Tokens
  try {
    const typographyPath = path.join(__dirname, 'typography-tokens.json');
    if (fs.existsSync(typographyPath)) {
      const typographyRaw = fs.readFileSync(typographyPath, 'utf-8');
      const typographyTokens = JSON.parse(typographyRaw);
      const typographyVars = processTokens(typographyTokens, typographyTokens);
      cssLines.push('  /* Typography Variables */');
      typographyVars.forEach(v => cssLines.push(`  ${v}`));
    }
  } catch (error) {
    console.error('Error processing typography tokens:', error.message);
  }

  // Process Color Tokens
  try {
    const colorsPath = path.join(__dirname, 'colors-tokens.json');
    if (fs.existsSync(colorsPath)) {
      const colorsRaw = fs.readFileSync(colorsPath, 'utf-8');
      if (colorsRaw.trim() !== '') {
        const colorsTokens = JSON.parse(colorsRaw);
        
        // We will process the roles manually since we know the exact structure
        if (colorsTokens.color && colorsTokens.color.role) {
          const roles = colorsTokens.color.role;
          
          if (roles.light) {
             cssLines.push('\n  /* Color Roles (Light) */');
             const lightVars = processTokens(roles.light, colorsTokens, ['color', 'role', 'light']);
             lightVars.forEach(v => cssLines.push(`  ${v}`));
          }
          if (roles.dark) {
             darkThemeLines.push('\n[data-theme="dark"] {');
             darkThemeLines.push('  /* Color Roles (Dark) */');
             // We drop the "dark" from path so variables match light theme exactly, e.g., --color-role-primary
             const darkVars = processTokens(roles.dark, colorsTokens, ['color', 'role', 'light']); 
             darkVars.forEach(v => darkThemeLines.push(`  ${v}`));
             darkThemeLines.push('}');
          }
        }
      }
    }
  } catch (error) {
    console.error('Error processing color tokens:', error.message);
  }

  cssLines.push('}');

  // Append dark theme lines if present
  if (darkThemeLines.length > 0) {
    cssLines = cssLines.concat(darkThemeLines);
  }

  const outputPath = path.join(__dirname, 'design-tokens.css');
  fs.writeFileSync(outputPath, cssLines.join('\n'));
  console.log(`Success! All CSS variables successfully written to: ${outputPath}`);
}

generateCSS();
