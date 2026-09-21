// 1. Array de Álbuns (Catálogo principal)
const albuns = [
    {
        id: 1,
        titulo: "Ten",
        artista: "Pearl Jam",
        ano: 1991,
        genero: "Grunge",
        capa: "img/Ten.jpg",
        musicas: [
            "Once", "Even Flow", "Alive", "Why Go", "Black", 
            "Jeremy", "Oceans", "Porch", "Garden", "Deep", "Release"
        ]
    },
    {
        id: 2,
        titulo: "Hybrid Theory",
        artista: "Linkin Park",
        ano: 2000,
        genero: "Nu Metal",
        capa: "img/HybridTheory.jpg",
        musicas: [
            "Papercut", "One Step Closer", "With You", "Points of Authority", 
            "Crawling", "Runaway", "By Myself", "In the End", 
            "A Place for My Head", "Forgotten", "Cure for the Itch", "Pushing Me Away"
        ]
    },
    {
        id: 3,
        titulo: "Good Kid, M.A.A.D City",
        artista: "Kendrick Lamar",
        ano: 2012,
        genero: "Hip-Hop",
        capa: "img/GKMC.jpeg",
        musicas: [
            "Sherane a.k.a Master Splinter's Daughter", "Bitch, Don't Kill My Vibe", 
            "Backseat Freestyle", "The Art of Peer Pressure", "Money Trees", 
            "Poetic Justice", "good kid", "m.A.A.d city", "Swimming Pools (Drank)", 
            "Sing About Me, I'm Dying of Thirst", "Real", "Compton"
        ]
    }
];

// (O array de avaliacoes continua exatamente igual logo abaixo...)

// 2. Array de Avaliações (Ligado aos álbuns através do 'albumId')
const avaliacoes = [
    // Avaliações do álbum 1 (Ten)
    { id: 101, albumId: 1, nota: 5.0, resenha: "Um álbum que define toda uma geração. A voz de Eddie Vedder está no seu auge." },
    { id: 102, albumId: 1, nota: 4.5, resenha: "Guitarras melancólicas e letras profundas. 'Black' é a melhor faixa." },
    { id: 103, albumId: 1, nota: 5.0, resenha: "Perfeito de início ao fim, não há uma única música fraca." },
    { id: 104, albumId: 1, nota: 4.0, resenha: "Muito bom, embora prefira a produção dos álbuns seguintes." },
    { id: 105, albumId: 1, nota: 5.0, resenha: "Energia pura. Um marco histórico no rock dos anos 90." },

    // Avaliações do álbum 2 (Hybrid Theory)
    { id: 106, albumId: 2, nota: 4.5, resenha: "Inovador na mistura de rock pesado com hip-hop. Nostalgia pura." },
    { id: 107, albumId: 2, nota: 5.0, resenha: "Voz rasgada impressionante. Cada faixa é um hino absoluto." },
    { id: 108, albumId: 2, nota: 4.0, resenha: "As letras são um pouco adolescentes, mas a energia é inegável." },
    { id: 109, albumId: 2, nota: 5.0, resenha: "Produção impecável, envelheceu incrivelmente bem." },
    { id: 110, albumId: 2, nota: 4.5, resenha: "Um clássico moderno que mudou a música mainstream." },

    // Avaliações do álbum 3 (Good Kid, M.A.A.D City)
    { id: 111, albumId: 3, nota: 5.0, resenha: "Uma verdadeira experiência cinematográfica em formato áudio." },
    { id: 112, albumId: 3, nota: 5.0, resenha: "Liricamente impecável, a forma como conta a história é brilhante." },
    { id: 113, albumId: 3, nota: 4.5, resenha: "Batidas excelentes e produção de altíssimo nível." },
    { id: 114, albumId: 3, nota: 4.8, resenha: "Mudou a trajetória do hip-hop nesta década." },
    { id: 115, albumId: 3, nota: 5.0, resenha: "Clássico instantâneo. Essencial para qualquer fã de música." }
];