// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');

    // Verifica se os elementos existem para evitar erros no console
    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => {
            // Alterna a classe 'aberto' no menu lateral
            menuLateral.classList.toggle('aberto');
        });
    } else {
        console.error("Botão de menu ou barra lateral não encontrados no HTML.");
    }
});