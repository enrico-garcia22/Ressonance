// Seleciona os elementos no DOM
const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

// Adiciona o evento de clique no botão de hambúrguer
btnMenu.addEventListener('click', () => {
    // Alterna a classe 'aberto' no menu lateral
    menuLateral.classList.toggle('aberto');
});