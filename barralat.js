document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrega o nome do utilizador salvo
    const perfilSalvo = JSON.parse(localStorage.getItem('usuarioPerfil'));
    const nomeSidebar = document.getElementById('nome-perfil-sidebar');
    
    if (nomeSidebar && perfilSalvo && perfilSalvo.nome) {
        nomeSidebar.textContent = perfilSalvo.nome;
    }

    // 2. Lógica do botão "Sair"
    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioPerfil'); // Apaga os dados
            
            if (nomeSidebar) nomeSidebar.textContent = "Nome do Perfil"; // Restaura o padrão
            
            alert("Sessão encerrada com sucesso.");
            window.location.href = 'index.html'; // Volta para a página inicial
        });
    }
});