const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

menu?.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!isOpen));
  if (!isOpen) {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '68px';
    nav.style.left = '14px';
    nav.style.right = '14px';
    nav.style.flexDirection = 'column';
    nav.style.padding = '20px';
    nav.style.border = '1px solid rgba(255,255,255,.09)';
    nav.style.borderRadius = '16px';
    nav.style.background = 'rgba(5,7,10,.96)';
    nav.style.backdropFilter = 'blur(20px)';
  } else {
    nav.removeAttribute('style');
  }
});
