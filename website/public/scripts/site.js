(() => {
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-mobile-menu]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuClose = document.querySelector('[data-menu-close]');

  const setMenu = (open) => {
    if (!menu) return;
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuToggle?.addEventListener('click', () => setMenu(true));
  menuClose?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));


  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const dock = document.querySelector('.floating-dock');
  let lastScrollY = window.scrollY;
  const updateDock = () => {
    if (!dock) return;
    const current = window.scrollY;
    dock.classList.toggle('is-hidden', current > lastScrollY && current > 320);
    lastScrollY = current;
  };
  window.addEventListener('scroll', updateDock, { passive: true });

  document.querySelectorAll('.floating-dock a').forEach((item) => {
    const icon = item.querySelector('svg');
    const setHovered = (hovered) => {
      item.classList.toggle('is-hovered', hovered);
      item.style.transform = hovered ? 'translateY(-8px)' : '';
      if (icon) icon.style.transform = hovered ? 'scale(1.32)' : '';
    };
    item.addEventListener('pointerenter', () => setHovered(true));
    item.addEventListener('pointerleave', () => setHovered(false));
    item.addEventListener('focus', () => setHovered(true));
    item.addEventListener('blur', () => setHovered(false));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));


})();
