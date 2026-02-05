(function () {
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('section[id]');

  if (!menuButton || !mobileMenu) {
    return;
  }

  function setMenu(open) {
    mobileMenu.classList.toggle('hidden', !open);
    menuButton.setAttribute('aria-expanded', String(open));
  }

  setMenu(false);

  menuButton.addEventListener('click', function () {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setMenu(false);
    }
  });

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    if (!mobileMenu.contains(target) && !menuButton.contains(target)) {
      setMenu(false);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isActive = href === '#' + id;
      link.classList.toggle('nav-link-active', isActive);
    });
  }

  if (sections.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-40% 0px -45% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
})();
