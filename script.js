const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

// Adiciona o evento de clique no botão de hambúrguer
btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('aberto');
});

// Função para calcular a média das notas de um álbum específico
function calcularMediaAlbum(idDoAlbum) {
    // Filtra apenas as avaliações que pertencem a este álbum
    const avaliacoesDoAlbum = avaliacoes.filter(av => av.albumId === idDoAlbum);
    
    // Se não houver avaliações, retorna 0
    if (avaliacoesDoAlbum.length === 0) return "0.0";
    
    // Soma todas as notas
    const somaNotas = avaliacoesDoAlbum.reduce((soma, av) => soma + av.nota, 0);
    
    // Calcula a média e formata para 1 casa decimal (ex: 4.7)
    const media = somaNotas / avaliacoesDoAlbum.length;
    return media.toFixed(1);
}

// Lógica para injetar os álbuns no HTML dinamicamente
const gradeAlbuns = document.querySelector('.grade-albuns');

// Função corrigida (apenas com um bloco forEach e nome sem acento)
function renderizarCatalogo(listaDeAlbuns) {
    gradeAlbuns.innerHTML = ''; 
    
    listaDeAlbuns.forEach(album => {
        const media = calcularMediaAlbum(album.id);
        
        const cartaoHTML = `
            <article class="cartao-album" data-genero="${album.genero}">
                <a href="album.html?id=${album.id}" class="link-capa" aria-label="Ver detalhes de ${album.titulo}">
                    
                    <!-- A MUDANÇA É NESTA LINHA ABAIXO -->
                    <img src="${album.capa}" alt="Capa do álbum ${album.titulo}" class="imagem-capa">
                    
                </a>
                <h3>${album.titulo}</h3>
                <p class="ano-genero">${album.ano} • ${album.genero}</p>
                
                <div class="estrelas" aria-label="Avaliação média: ${media} de 5">
                    ★ ${media}
                </div>
            </article>
        `;
        
        gradeAlbuns.innerHTML += cartaoHTML;
    });
}

// Executa a função para desenhar os álbuns no ecrã quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    // Corrigido para remover o acento, ligando corretamente à função
    renderizarCatalogo(albuns);
});