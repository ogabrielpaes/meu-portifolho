document.addEventListener("DOMContentLoaded", function() {
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
});

    document.getElementById("menu-toggle").addEventListener("click", function() {
        var menu = document.getElementById("menu");
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
        }
    });

function toggleText() {
    var fullText = document.getElementById('full-text');
    var introText = document.getElementById('intro-text');
    var toggleButton = document.getElementById('toggle-text');

    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        toggleButton.innerHTML = 'Leia menos...';
    } else {
        fullText.style.display = 'none';
        toggleButton.innerHTML = 'Leia mais...';
    }
}
