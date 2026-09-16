const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

// Adiciona o evento de clique no botão de hambúrguer
btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('aberto');
});