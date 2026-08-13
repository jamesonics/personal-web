(() => {
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-mobile-menu]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuClose = document.querySelector('[data-menu-close]');
  const menuBackground = document.querySelectorAll('[data-header] .header-inner, #main-content, .site-footer, .floating-dock');

  const setMenu = (open, restoreFocus = false, instant = false) => {
    if (!menu) return;
    menu.classList.toggle('is-instant', instant);
    menu.classList.toggle('open', open);
    menu.toggleAttribute('inert', !open);
    menu.setAttribute('aria-hidden', String(!open));
    menuToggle?.setAttribute('aria-expanded', String(open));
    menuToggle?.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    menuBackground.forEach((element) => element.toggleAttribute('inert', open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) requestAnimationFrame(() => menuClose?.focus());
    else if (restoreFocus) menuToggle?.focus();
    if (instant) setTimeout(() => menu.classList.remove('is-instant'), 300);
  };
  menuToggle?.addEventListener('click', (event) => setMenu(true, false, event.detail === 0));
  menuClose?.addEventListener('click', (event) => setMenu(false, true, event.detail === 0));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', (event) => setMenu(false, false, event.detail === 0)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.classList.contains('open')) setMenu(false, true, true);
  });
  const desktopLayout = matchMedia('(min-width: 761px)');
  desktopLayout.addEventListener('change', (event) => {
    if (event.matches && menu?.classList.contains('open')) setMenu(false);
  });

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
