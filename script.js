// ===============================
// HEADER FIXO (STICKY)
// ===============================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;
    header.classList.toggle("sticky", window.scrollY > 50);
});


// ===============================
// ROLAGEM SUAVE DOS LINKS INTERNOS
// ===============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        if (!href.startsWith("#")) return;

        e.preventDefault();

        const destino = document.querySelector(href);
        if (!destino) return;

        destino.scrollIntoView({ behavior: 'smooth' });
    });
});


// ===============================
// CARROSSEL DE IMAGENS
// ===============================
let indice = 0;

function mudarImagem(direcao) {
    const imagens = document.querySelectorAll('.carrossel img');
    if (!imagens.length) return;

    imagens[indice].classList.remove('ativo');
    indice = (indice + direcao + imagens.length) % imagens.length;
    imagens[indice].classList.add('ativo');
}

window.mudarImagem = mudarImagem;
