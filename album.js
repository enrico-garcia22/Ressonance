document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');

    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => {
            menuLateral.classList.toggle('aberto');
        });
    }
    const params = new URLSearchParams(window.location.search);
    const albumId = parseInt(params.get('id'));

    if (!albumId) {
        window.location.href = 'index.html';
        return;
    }

    const album = albuns.find(a => a.id === albumId);
    const resenhasDoAlbum = avaliacoes.filter(av => av.albumId === albumId);
    
    if (!album) {
        document.getElementById('detalhes-topo').innerHTML = '<h2>Álbum não encontrado.</h2>';
        return;
    }

    const somaNotas = resenhasDoAlbum.reduce((soma, av) => soma + av.nota, 0);
    const media = resenhasDoAlbum.length > 0 ? (somaNotas / resenhasDoAlbum.length).toFixed(1) : "0.0";

    document.title = `${album.titulo} (${album.ano}) - Resonance`;

    // Transforma o array de músicas em itens de lista HTML <li>
    const listaDeMusicasHTML = album.musicas.map((musica, index) => {
        return `<li><span class="numero-faixa">${index + 1}.</span> ${musica}</li>`;
    }).join('');

    const detalhesTopo = document.getElementById('detalhes-topo');
    detalhesTopo.innerHTML = `
        <div class="cabecalho-imdb">
            <div class="titulos-imdb">
                <h1 class="titulo-gigante">${album.titulo}</h1>
                <p class="subtitulo-imdb">${album.ano} • ${album.artista}</p>
            </div>
            <div class="avaliacao-imdb">
                <div class="nota-destaque">
                    <span class="estrela-grande">★</span>
                    <div class="numeros-nota">
                        <strong>${media}</strong><span class="nota-maxima">/5</span>
                        <div class="total-avaliacoes">${resenhasDoAlbum.length} avaliações</div>
                    </div>
                </div>
            </div>
        </div>

       <div class="conteudo-principal-imdb">
            <!-- Trocamos a figure pela tag img -->
            <img src="${album.capa}" alt="Capa do álbum ${album.titulo}" class="capa-grande-img">
            
            <div class="informacoes-laterais">
                <div class="tags-genero">
                    <span class="tag">${album.genero}</span>
                </div>
                
                <!-- Nova Seção: Lista de Músicas -->
                <div class="container-faixas">
                    <h3>Faixas</h3>
                    <ul class="lista-musicas">
                        ${listaDeMusicasHTML}
                    </ul>
                </div>
                
                <div class="creditos-linha">
                    <strong>Artista principal</strong> <span>${album.artista}</span>
                </div>
            </div>
        </div>
    `;

    const listaResenhas = document.getElementById('lista-resenhas');
    
    if (resenhasDoAlbum.length === 0) {
        listaResenhas.innerHTML = '<p class="sem-resenhas">Ainda não há avaliações para este álbum. Seja o primeiro a avaliar!</p>';
        return;
    }

    resenhasDoAlbum.forEach(resenha => {
        const resenhaHTML = `
            <article class="cartao-resenha">
                <div class="resenha-topo">
                    <span class="resenha-estrelas">★ ${resenha.nota.toFixed(1)}</span>
                    <span class="resenha-autor">Utilizador #${resenha.id}</span>
                </div>
                <p class="resenha-texto">"${resenha.resenha}"</p>
            </article>
        `;
        listaResenhas.innerHTML += resenhaHTML;
    });
});