document.addEventListener("DOMContentLoaded", () => {
    // Menu Lateral
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');

    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => {
            menuLateral.classList.toggle('aberto');
        });
    }

    document.title = "Minhas Resenhas - Ressonance";

    // RESENHAS DO USUARIO
    const containerResenhas = document.getElementById('lista-minhas-resenhas');
    const perfilSalvo = JSON.parse(localStorage.getItem('usuarioPerfil'));

    // Verifica se está logado
    if (!perfilSalvo || !perfilSalvo.nome) {
        containerResenhas.innerHTML = '<p class="sem-resenhas">Crie um perfil para ver o seu histórico de resenhas.</p>';
        return;
    }

    // Resenhas adicionadas localmente
    const todasResenhasLocais = JSON.parse(localStorage.getItem('resenhasAdicionais')) || [];
    
    // Filtra para pegar apenas as que tem o mesmo nome do perfil atual
    const minhasResenhasReais = todasResenhasLocais.filter(av => av.autor === perfilSalvo.nome);

    if (minhasResenhasReais.length === 0) {
        containerResenhas.innerHTML = '<p class="sem-resenhas">Você ainda não publicou nenhuma resenha.</p>';
        return;
    }

    // Desenha as resenhas na tela
    minhasResenhasReais.forEach(resenha => {
        const album = albuns.find(a => a.id === resenha.albumId);
        
        if (album) {
            const cardHTML = `
                <article class="cartao-minha-resenha">
                    <div class="info-album-resenha">
                        <img src="${album.capa}" alt="Capa de ${album.titulo}" class="capa-resenha-horizontal">
                        <div class="textos-album-resenha">
                            <h3>${album.titulo}</h3>
                            <div class="nota-resenha">
                                <span class="estrela-icone">★</span>
                                <span>(${resenha.nota.toFixed(1)}/5)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="texto-resenha-usuario">
                        <p>"${resenha.resenha}"</p>
                    </div>
                </article>
            `;
            containerResenhas.innerHTML += cardHTML;
        }
    });
});