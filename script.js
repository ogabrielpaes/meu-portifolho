document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function animaAoRolar() {
        sections.forEach(section => {
            const posicaoTopo = section.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.75;

            if (posicaoTopo < alturaTela) {
                section.classList.add("animar");
            }
        });
    }

    window.addEventListener("scroll", animaAoRolar);
    animaAoRolar();

    // Menu responsivo
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            if (menu.style.display === "flex") {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
                menu.style.flexDirection = "column";
            }
        });
    }

    // Botão "Leia mais..." da seção SOBRE MIM
    const fullText = document.getElementById("full-text");
    const toggleButton = document.getElementById("toggle-text");

    if (toggleButton && fullText) {
        toggleButton.addEventListener("click", function () {
            const isHidden = fullText.style.display === "none" || fullText.style.display === "";

            fullText.style.display = isHidden ? "block" : "none";
            toggleButton.textContent = isHidden ? "Leia menos..." : "Leia mais...";
        });
    }

    // Botões "Leia mais..." dos projetos
    const botoesLeiaMais = document.querySelectorAll(".toggle-text");

    botoesLeiaMais.forEach(link => {
        link.addEventListener("click", function () {
            const projeto = this.closest(".projeto");
            const textoCurto = projeto.querySelector(".texto-curto");
            const textoCompleto = projeto.querySelector(".texto-completo");

            const isHidden = textoCompleto.style.display === "none" || textoCompleto.style.display === "";

            textoCompleto.style.display = isHidden ? "inline" : "none";
            textoCurto.style.display = isHidden ? "none" : "inline";
            this.textContent = isHidden ? "Leia menos..." : "Leia mais...";
        });
    });
});
