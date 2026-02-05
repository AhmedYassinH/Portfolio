(function () {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length === 0) {
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    const delay = element.getAttribute('data-reveal-delay');
    if (delay) {
      element.style.transitionDelay = delay + 'ms';
    }
  });

  if (reducedMotion) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  revealElements.forEach((element) => observer.observe(element));
})();
