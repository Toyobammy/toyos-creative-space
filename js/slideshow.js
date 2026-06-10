document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.slideshow__track');
  var viewport = document.querySelector('.slideshow__viewport');
  var section = document.querySelector('.slideshow');

  if (!track || !viewport || !section) return;

  var slides = Array.from(track.children);
  var gap = 24;
  var scrollPos = 0;
  var animationId = null;
  var isVisible = false;

  slides.forEach(function (slide) {
    var clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  function getSlideWidth() {
    if (slides.length === 0) return 624;
    return slides[0].offsetWidth + gap;
  }

  function animateScroll() {
    if (!isVisible) {
      animationId = null;
      return;
    }

    scrollPos += 0.8;
    var slideW = getSlideWidth();
    var resetPoint = slides.length * slideW;

    if (scrollPos >= resetPoint) {
      scrollPos = 0;
    }

    track.style.transform = 'translateX(-' + scrollPos + 'px)';
    animationId = requestAnimationFrame(animateScroll);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        isVisible = true;
        if (!animationId) {
          animationId = requestAnimationFrame(animateScroll);
        }
      } else {
        isVisible = false;
      }
    });
  }, { threshold: 0.1 });

  observer.observe(section);
});
