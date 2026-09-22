# Ressonance - Plataforma de Resenhas Musicais

O **Ressonance** é uma interface web focada na experiência do usuário para catalogação, avaliação e exploração de álbuns musicais. Desenvolvido como projeto individual para a disciplina de Sistemas Computacionais, o sistema destaca-se pela semântica HTML5, acessibilidade e gestão de dados dinâmicos utilizando recursos nativos do navegador.

---

## Funcionalidades Principais

- **Catálogo Abrangente:** Base de dados com capas, anos, artistas, gêneros musicais variados e lista de faixas completas.
- **Personalização de Perfil:** O utilizador pode registar o seu nome e selecionar até 3 géneros musicais favoritos.
- **Home Dinâmica e Inteligente:** O catálogo principal reorganiza-se automaticamente para priorizar os álbuns correspondentes aos gêneros favoritos do utilizador, ordenados de forma decrescente pela avaliação média.
- **Página de Detalhes do Álbum:** Visual limpo e imersivo, exibindo notas médias, contagem de avaliações, lista de faixas interativa e resenhas da comunidade.
- **Adicionador de Resenhas Funcional:** Formulário com campo de pesquisa inteligente (autocompletar ordenado alfabeticamente), atribuição de notas e campo de texto livre.
- **Histórico Pessoal:** Seção dedicada onde o utilizador logado consegue visualizar exclusivamente as resenhas que publicou.
- **Navegação Global por Barra Lateral:** Menu em formato de "hambúrguer" com transição suave que empurra o conteúdo da página.

---

## Tecnologias Utilizadas

- **HTML5:**
- **CSS3:**
- **JavaScript (Vanilla):**

---

## Estrutura de Diretórios

```text
ProjetoIndividual/
├── index.html              # Página principal (Catálogo e Ordenação)
├── album.html              # Página de detalhes e faixas do álbum
├── minhas-resenhas.html    # Histórico de resenhas do utilizador
├── adicionar-resenha.html  # Página de envio de nova avaliação
├── meu-perfil.html         # Gestão de perfil e géneros favoritos
├── style.css               # Folha de estilos global do projeto
├── dados.js                # Base de dados (30 álbuns + motor de avaliações)
├── script.js               # Lógica e renderização da página inicial
├── album.js                # Lógica da página de detalhes do álbum
├── minhas-resenhas.js      # Lógica de carregamento de resenhas do utilizador
├── adicionar-resenha.js    # Lógica de validação e gravação de resenha
├── meu-perfil.js           # Lógica de salvamento e seleção de géneros
├── sidebar.js              # Gestão global da barra lateral e sessão
└── img/                    # Diretório com as capas dos álbuns (.jpg, .png)
