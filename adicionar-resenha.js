document.addEventListener("DOMContentLoaded", () => {
    // 1. VERIFICAÇÃO DE LOGIN
    const perfilSalvo = JSON.parse(localStorage.getItem('usuarioPerfil'));
    
    if (!perfilSalvo || !perfilSalvo.nome) {
        alert("Você precisa criar um perfil antes de adicionar uma resenha!");
        window.location.href = 'meu-perfil.html';
        return;
    }

    document.title = "Adicionar Resenha - Ressonance";

    // 2. Lógica do Menu
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');
    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => menuLateral.classList.toggle('aberto'));
    }

    const inputAlbum = document.getElementById('input-album');
    const listaAutocomplete = document.getElementById('lista-autocomplete');
    const rangeNota = document.getElementById('range-nota');
    const displayNota = document.getElementById('display-nota');
    const txtResenha = document.getElementById('txt-resenha');
    const btnEnviar = document.getElementById('btn-enviar-resenha');

    let albumSelecionadoId = null;

    rangeNota.addEventListener('input', (e) => {
        displayNota.textContent = parseFloat(e.target.value).toFixed(1);
    });

    inputAlbum.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        listaAutocomplete.innerHTML = '';
        albumSelecionadoId = null;

        if (termo.trim().length === 0) return;

        const filtrados = albuns
            .filter(album => album.titulo.toLowerCase().includes(termo))
            .sort((a, b) => a.titulo.localeCompare(b.titulo));

        filtrados.forEach(album => {
            const item = document.createElement('div');
            item.classList.add('item-autocomplete');
            item.textContent = `${album.titulo} (${album.artista})`;
            
            item.addEventListener('click', () => {
                inputAlbum.value = album.titulo;
                albumSelecionadoId = album.id;
                listaAutocomplete.innerHTML = ''; 
            });
            
            listaAutocomplete.appendChild(item);
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target !== inputAlbum) listaAutocomplete.innerHTML = '';
    });

    // 3. ENVIAR RESENHA
    btnEnviar.addEventListener('click', () => {
        if (!albumSelecionadoId) {
            alert('Por favor, selecione um álbum da lista suspensa.');
            return;
        }
        if (txtResenha.value.trim() === '') {
            alert('Por favor, escreva o texto da resenha.');
            return;
        }

        const novaResenha = {
            id: Date.now(), 
            albumId: albumSelecionadoId,
            nota: parseFloat(rangeNota.value),
            resenha: txtResenha.value.trim(),
            autor: perfilSalvo.nome
        };

        const resenhasAtuais = JSON.parse(localStorage.getItem('resenhasAdicionais')) || [];
        resenhasAtuais.push(novaResenha);
        localStorage.setItem('resenhasAdicionais', JSON.stringify(resenhasAtuais));

        window.location.href = `album.html?id=${albumSelecionadoId}`;
    });
});