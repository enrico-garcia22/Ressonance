document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Lateral
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');
    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => menuLateral.classList.toggle('aberto'));
    }

    const inputNome = document.getElementById('input-nome-perfil');
    const gridGeneros = document.getElementById('grid-generos');
    const btnSalvar = document.getElementById('btn-salvar-perfil');

    // 2. Mapear gêneros únicos do dados.js
    const generosUnicos = [...new Set(albuns.map(album => album.genero))].sort();
    let generosSelecionados = [];

    // 3. Preencher formulário se já houver dados salvos
    const perfilSalvo = JSON.parse(localStorage.getItem('usuarioPerfil'));
    if (perfilSalvo) {
        inputNome.value = perfilSalvo.nome || '';
        generosSelecionados = perfilSalvo.generos || [];
    }

    // 4. Desenhar os botões de gênero na caixa preta
    generosUnicos.forEach(genero => {
        const btn = document.createElement('button');
        btn.classList.add('btn-genero');
        btn.textContent = genero;
        
        // Mantém roxo se já estava salvo
        if (generosSelecionados.includes(genero)) {
            btn.classList.add('selecionado');
        }

        // Lógica de clique no gênero (Limite de 3)
        btn.addEventListener('click', () => {
            if (generosSelecionados.includes(genero)) {
                // Desmarca
                generosSelecionados = generosSelecionados.filter(g => g !== genero);
                btn.classList.remove('selecionado');
            } else {
                // Marca (verificando limite)
                if (generosSelecionados.length >= 3) {
                    alert("Você só pode escolher no máximo 3 gêneros.");
                    return;
                }
                generosSelecionados.push(genero);
                btn.classList.add('selecionado');
            }
        });
        
        gridGeneros.appendChild(btn);
    });

    // 5. Botão de Salvar
    btnSalvar.addEventListener('click', () => {
        const nomeDigitado = inputNome.value.trim();
        
        if (!nomeDigitado) {
            alert("Por favor, digite o nome do usuário antes de salvar.");
            return;
        }

        // Cria o objeto e guarda na memória
        const dadosPerfil = {
            nome: nomeDigitado,
            generos: generosSelecionados
        };
        localStorage.setItem('usuarioPerfil', JSON.stringify(dadosPerfil));

        // Atualiza o nome instantaneamente na barra lateral da própria página
        const nomeSidebar = document.getElementById('nome-perfil-sidebar');
        if (nomeSidebar) nomeSidebar.textContent = nomeDigitado;

        alert("Perfil salvo com sucesso!");
    });
});