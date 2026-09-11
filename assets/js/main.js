// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- mobile nav toggle ----
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') links.classList.remove('open');
});

// ---- reveal on scroll ----
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ---- terminal typewriter ----
(function typeTerminal() {
  const line = document.querySelector('.term__body p:last-child');
  if (!line) return;
  const cursor = line.querySelector('.cursor');
  const full = ' ./defend --mode soc';
  let i = 0;
  const type = () => {
    if (i <= full.length) {
      line.innerHTML = '<span class="prompt">$</span>' + full.slice(0, i) +
        '<span class="cursor">▊</span>';
      i++;
      setTimeout(type, 55);
    }
  };
  type();
})();
