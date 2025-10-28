// === MENU FIXO AO ROLAR ===
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// === ROLAGEM SUAVE AO CLICAR NOS LINKS ===
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
