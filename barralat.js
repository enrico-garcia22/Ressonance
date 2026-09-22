document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrega o nome do utilizador salvo
    const perfilSalvo = JSON.parse(localStorage.getItem('usuarioPerfil'));
    const nomeSidebar = document.getElementById('nome-perfil-sidebar');
    
    if (nomeSidebar && perfilSalvo && perfilSalvo.nome) {
        nomeSidebar.textContent = perfilSalvo.nome;
    }

    // 2. Botão "Sair"
    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioPerfil');
            
            if (nomeSidebar) nomeSidebar.textContent = "Nome do Perfil";
            
            alert("Sessão encerrada com sucesso.");
            window.location.href = 'index.html';
        });
    }
});