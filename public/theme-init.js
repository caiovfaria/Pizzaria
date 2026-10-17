// Apply the preference before the page is painted; storage may be unavailable.
(() => {
  let saved;
  try { saved = localStorage.getItem('fornalha-theme'); } catch {}
  const dark = saved === 'dark' || (saved !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#1f211d' : '#f5f0e5');
})();
