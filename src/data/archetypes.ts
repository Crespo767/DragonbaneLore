export type Archetype = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stories: string[];
  hooks: string[];
  tags: string[];
};

export const archetypes: Archetype[] = [
  { slug: "artesao", name: "Artesão", tagline: "Construtores que moldam ordem a partir do caos.",
    description: "Com um martelo decente, uma espátula e argamassa, um artesão habilidoso pode surpreender até mesmo os deuses. São construtores, pedreiros, lenhadores, ferreiros ou curtidores movidos por uma missão solene de formar ordem e estrutura a partir do caos.",
    stories: ["Um pedido impossível de um nobre", "Uma ferramenta antiga e amaldiçoada", "Um aprendiz que desapareceu nas minas"],
    hooks: ["Reputação na vila", "Um rival mestre", "Uma encomenda de guerra"],
    tags: ["ofício", "ordem"] },
  { slug: "bardo", name: "Bardo", tagline: "Cronistas que cantam feitos e riquezas antigas.",
    description: "A memória de feitos e riquezas antigas é mantida viva pelos bardos. Viajam entre pousadas ganhando seu sustento através da narração de baladas épicas, ou se apresentam em cortes como cronistas imortalizando o tempo presente para as gerações futuras.",
    stories: ["Uma canção proibida sobre um imperador dragão", "Um patrono caído em desgraça", "Uma lenda de masmorra que pede para ser provada"],
    hooks: ["Convite suspeito", "Um manuscrito valioso", "Um poema letal"],
    tags: ["cronista", "viagem", "história"] },
  { slug: "cacador", name: "Caçador", tagline: "O indomável e o cruel lar na selva.",
    description: "Laçar lebres, esfaquear javalis e perseguir cervos silenciosamente nas profundezas. Seu lar e destino estão na selva; o magnífico, o indomável e o cruel. Por conta dos velhos deuses da mata, podem ser muito solitários e pouco civilizados.",
    stories: ["Uma besta mítica fora de seu território", "Um vilarejo cercado por algo que não deixa rastros", "Uma caçada sangrenta que nunca terminou"],
    hooks: ["Recompensa pela fera", "O cheiro do inimigo no vento", "Marcas inumanas no chão"],
    tags: ["selva", "rastro", "sobrevivência"] },
  { slug: "cavaleiro", name: "Cavaleiro", tagline: "Juramentos, obediência e um ódio implacável.",
    description: "Guerreiros que juraram fidelidade a um poder superior, como uma ordem, um senhor feudal ou um deus. Este juramento dita suas vidas em obediência, frequentemente incluindo um ódio implacável por qualquer coisa considerada contrária ao espírito desse juramento.",
    stories: ["Um juramento letal de cumprir", "Uma fortaleza tomada por orcs", "Um ex-irmão de armas que traiu a coroa"],
    hooks: ["Honra manchada", "A defesa de um fraco", "O estandarte caído do mestre"],
    tags: ["honra", "dever", "ordem"] },
  { slug: "comerciante", name: "Comerciante", tagline: "Comprar barato, vender caro.",
    description: "A regra de ouro. Nenhuma mercadoria é muito comum, nenhum cliente pouco importante, enquanto o princípio de transformar o que você tem em mais ainda valer. Atravessam as neblinas cobrando pedágio de oportunidades.",
    stories: ["Uma carga que atrai fantasmas", "Um sócio desonesto numa guilda", "Um porto ou mercado sitiado"],
    hooks: ["Contrato valioso", "Moedas de uma ruína antiga", "Um mapa mercantil do Império Dracônico"],
    tags: ["estrada", "barganha", "moedas"] },
  { slug: "estudioso", name: "Estudioso", tagline: "Perscrutadores dos grandes mistérios.",
    description: "Atrás da casca dos eventos mundanos, o universo esconde grandes mistérios. Os estudiosos passam suas noites traduzindo velhos textos de civilizações mortas, na esperança de iluminar a escuridão do desconhecido.",
    stories: ["Um livro esquecido da Crônica Imperial", "Uma tradução que profetiza sangue", "O templo perdido nas montanhas"],
    hooks: ["Inscrições intocadas", "Uma tumba sem violações", "Um enigma letal"],
    tags: ["saber", "ruínas", "conhecimento"] },
  { slug: "guerreiro", name: "Guerreiro", tagline: "A arte e o ofício da morte rápida.",
    description: "Especialistas na arte da morte rápida. Da infantaria que marchou em lamacento campos de batalha aos mercenários sem mestre dispostos a levantar a espada pesada por qualquer um que possa pagar com moedas ou comida.",
    stories: ["Um antigo capitão pede ajuda de vida ou morte", "Uma vingança brutal adiada", "O cerco contra um enxame de goblins"],
    hooks: ["Apenas trabalho", "Uma espada de família", "Proteger a vila natal"],
    tags: ["luta", "sangue", "morte"] },
  { slug: "ladrao", name: "Ladrão", tagline: "Trancas não existem e escrúpulos também não.",
    description: "Nenhuma tranca é tão forte, e nenhum segredo é enterrado fundo o suficiente. Eles consideram as propriedades, muralhas e limites das outras pessoas mero desafio. Para o ladrão, a vida é sobre o prêmio e a fuga.",
    stories: ["O roubo de uma relíquia animista", "O líder da guilda é um monstro", "O assalto a um feudo de um cavaleiro negro"],
    hooks: ["Uma dívida impagável", "Um cofre indestrutível", "Fuga das celas de um palácio"],
    tags: ["furtividade", "prêmio", "crime"] },
  { slug: "mago", name: "Mago", tagline: "Disciplina sobre forças místicas e incontroláveis.",
    description: "Existem forças que não podem ser detectadas por meio de toque, paladar, audição ou cheiro. Forças poderosas o suficiente para despedaçar a terra. Dedicam a vida para dominá-las através das escolas de Animismo, Elementalismo e Mentalismo, arriscando sanidade.",
    stories: ["Um círculo mágico violado por um demônio", "O mestre corrompido", "O poder de um cajado de osso primordial"],
    hooks: ["Magia ressonante", "O livro do mestre", "Sussurros do outro lado"],
    tags: ["magia", "escola", "poder"] },
  { slug: "marinheiro", name: "Marinheiro", tagline: "Agitados pelas ondas e ventos marítimos.",
    description: "As ondas agitadas e os grandes oceanos são o campo de batalha do marinheiro. Eles vivem em constante movimento, viajando entre portos cheios de armazéns escuros, tavernas barulhentas e oportunidades mortais no cais.",
    stories: ["Um navio devorado por algo com tentáculos", "O capitão morto volta das águas", "Um baú pescado de um abismo brilhante"],
    hooks: ["O rumo estelar", "Tatuagem profética", "Batalha sangrenta no cais"],
    tags: ["mar", "viagem", "porto"] },
];
