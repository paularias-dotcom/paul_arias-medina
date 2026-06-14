// ── Navigation ──
function showSection(id, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

// ── Language Toggle ──
function setLang(lang) {
  document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('pam-lang', lang);
}

// ── Mobile Sidebar ──
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Restore language
  const savedLang = localStorage.getItem('pam-lang') || 'es';
  setLang(savedLang);

  // Show home by default
  showSection('home', document.querySelector('.sidebar-nav a[data-section="home"]'));
});
