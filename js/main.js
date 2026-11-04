(() => {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('menu');
  const wa = document.querySelector('.whatsapp-float');

  // Menú móvil
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('active', open);
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setOpen(false); toggle.focus(); } });
  }

  // Header y botón WhatsApp según scroll (las páginas legales llevan .scrolled fijo)
  const fixedHeader = header && header.dataset.fixed === 'true';
  const onScroll = () => {
    const y = window.scrollY;
    if (header && !fixedHeader) header.classList.toggle('scrolled', y > 50);
    if (wa) wa.classList.toggle('show', y > 300);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mapa bajo demanda (no carga Google hasta que el usuario lo pide: RGPD)
  const mapBtn = document.getElementById('load-map');
  if (mapBtn) {
    mapBtn.addEventListener('click', () => {
      const box = document.getElementById('map-box');
      const iframe = document.createElement('iframe');
      iframe.src = box.dataset.src;
      iframe.title = 'Mapa de ubicación';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      box.replaceChildren(iframe);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
