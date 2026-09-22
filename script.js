document.addEventListener("DOMContentLoaded", () => {
    // Menu Lateral
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');

    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => {
            menuLateral.classList.toggle('aberto');
        });
    }

    // Calcular a média das notas de um álbum específico
    function calcularMediaAlbum(idDoAlbum) {
        const avaliacoesDoAlbum = avaliacoes.filter(av => av.albumId === idDoAlbum);
        if (avaliacoesDoAlbum.length === 0) return "0.0";
        const somaNotas = avaliacoesDoAlbum.reduce((soma, av) => soma + av.nota, 0);
        return (somaNotas / avaliacoesDoAlbum.length).toFixed(1);
    }

    const gradeAlbuns = document.querySelector('.grade-albuns');

    function renderizarCatalogo() {
        gradeAlbuns.innerHTML = ''; 

        // 1. Recupera os gêneros escolhidos pelo utilizador
        const perfilSalvo = JSON.parse(localStorage.getItem('usuarioPerfil'));
        const generosPreferidos = perfilSalvo && perfilSalvo.generos ? perfilSalvo.generos : [];

        // 2. Cria uma lista de álbuns com a média calculada
        const albunsComMedia = albuns.map(album => {
            return {
                ...album,
                mediaNota: parseFloat(calcularMediaAlbum(album.id))
            };
        });

        // 3. Separa os álbuns em dois grupos
        const albunsPreferidos = albunsComMedia.filter(album => generosPreferidos.includes(album.genero));
        const outrosAlbuns = albunsComMedia.filter(album => !generosPreferidos.includes(album.genero));

        // 4. Ordena ambos os grupos pela nota
        albunsPreferidos.sort((a, b) => b.mediaNota - a.mediaNota);
        outrosAlbuns.sort((a, b) => b.mediaNota - a.mediaNota);

        // 5. Junta os dois grupos
        const albunsOrdenados = [...albunsPreferidos, ...outrosAlbuns];

        // 6. Desenha os cartões na tela
        albunsOrdenados.forEach(album => {
            const mediaExibicao = album.mediaNota.toFixed(1);
            
            const cartaoHTML = `
                <article class="cartao-album" data-genero="${album.genero}">
                    <a href="album.html?id=${album.id}" class="link-capa" aria-label="Ver detalhes de ${album.titulo}">
                        <img src="${album.capa}" alt="Capa do álbum ${album.titulo}" class="imagem-capa">
                    </a>
                    <h2>${album.titulo}</h2>
                    <p class="ano-genero">${album.ano} • ${album.genero}</p>
                    
                    <div class="estrelas" aria-label="Avaliação média: ${mediaExibicao} de 5">
                        ★ ${mediaExibicao}
                    </div>
                </article>
            `;
            
            gradeAlbuns.innerHTML += cartaoHTML;
        });
    }

    renderizarCatalogo();
});