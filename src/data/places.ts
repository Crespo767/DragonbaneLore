export type Place = {
  slug: string;
  name: string;
  shortDesc: string;
  atmosphere: string;
  publicKnowledge: string[];
  rumors: string[];
  tags: string[];
  conceptual?: boolean;
};

export const places: Place[] = [
  { slug: "vale-enevoado", name: "Vale Enevoado", shortDesc: "Região de fronteira citada como ponto de partida clássico para aventureiros.",
    atmosphere: "Florestas densas, rios frios, vilarejos modestos e estradas que somem na névoa.",
    publicKnowledge: ["Há vilarejos que recebem viajantes.", "Castelos em ruínas pontuam o horizonte.", "Caçadores e batedores conhecem trilhas seguras — algumas."],
    rumors: ["Algo se move sob as raízes das árvores mais antigas.", "Uma estrela cadente caiu além das colinas no inverno passado.", "Um cavaleiro de armadura preta foi visto bebendo numa pousada e ninguém soube quem era."],
    tags: ["fronteira", "floresta", "viagem"] },
  { slug: "florestas-enevoadas", name: "Florestas Enevoadas", shortDesc: "Matas antigas onde a luz nunca chega ao chão por inteiro.", conceptual: true,
    atmosphere: "Musgo, troncos retorcidos, pássaros que param de cantar quando você chega.",
    publicKnowledge: ["Existem trilhas marcadas por viajantes.", "Lenhadores evitam certas clareiras.", "Há santuários esquecidos sob as árvores."],
    rumors: ["Uma clareira que muda de lugar.", "Vozes que chamam pelo seu nome.", "Bestas que andam em duas pernas quando ninguém vê."],
    tags: ["floresta", "mistério", "selvagem"] },
  { slug: "montanhas-do-norte", name: "Montanhas do Norte", shortDesc: "Picos congelados, passagens estreitas, ventos que mordem.", conceptual: true,
    atmosphere: "Neve, granito, fumaça de fogueiras de pastores. À noite, o céu é mais claro que a terra.",
    publicKnowledge: ["Anões mantêm minas e estradas escondidas.", "Caravanas só passam em certas estações.", "Há trilhas que só guias antigos conhecem."],
    rumors: ["Algo gigantesco voa entre os picos quando a tempestade aperta.", "Uma porta de pedra que ninguém consegue abrir.", "Um rugido que se ouve uma vez por geração."],
    tags: ["montanha", "perigo", "anões"] },
  { slug: "ruinas-draconicas", name: "Ruínas Dracônicas", shortDesc: "Restos de impérios antigos marcados por garras, fogo e runas.", conceptual: true,
    atmosphere: "Pedras enegrecidas, símbolos esquecidos, cheiro persistente de ferro queimado.",
    publicKnowledge: ["São perigosas. Sempre.", "Estudiosos pagam bem por inscrições copiadas.", "Saqueadores raramente voltam inteiros — quando voltam."],
    rumors: ["Um dragão voltou para uma delas.", "Há um salão que se ilumina sozinho ao amanhecer.", "Um tesouro que enlouquece quem o toca."],
    tags: ["ruína", "dragão", "mistério"] },
  { slug: "abismos-cavernas", name: "Abismos e Cavernas", shortDesc: "O mundo subterrâneo, vasto e indiferente.", conceptual: true,
    atmosphere: "Pingar de água em escuridão, ecos longos, ar parado por séculos.",
    publicKnowledge: ["Algumas cavernas conectam reinos inteiros.", "Há criaturas que nunca viram a luz.", "Mapas de cavernas envelhecem rápido — desabamentos mudam tudo."],
    rumors: ["Uma cidade morta lá embaixo.", "Olhos que brilham em fendas profundas.", "Uma voz que pergunta seu nome."],
    tags: ["caverna", "perigo", "subterrâneo"] },
  { slug: "vilarejos-fronteira", name: "Vilarejos de Fronteira", shortDesc: "Pequenas comunidades nas margens do mundo conhecido.", conceptual: true,
    atmosphere: "Cercas de madeira, sinos de bronze, fogueiras à noite. Todos conhecem todos — e desconfiam de quem chega.",
    publicKnowledge: ["São o último ponto de descanso antes do desconhecido.", "Têm pousadas modestas e mercados pequenos.", "Cada vilarejo tem sua própria superstição."],
    rumors: ["Um xerife que some em luas cheias.", "Uma criança que sabe coisas que não deveria.", "Um viajante que nunca foi embora — nem foi visto sair."],
    tags: ["civilização", "fronteira", "comunidade"] },
  { slug: "estradas-antigas", name: "Estradas Antigas", shortDesc: "Vias de pedra construídas em eras esquecidas, ainda em uso.", conceptual: true,
    atmosphere: "Marcos de pedra cobertos de musgo, pontes que cantam ao vento, sombras longas ao entardecer.",
    publicKnowledge: ["Conectam pontos distantes do mapa.", "Bandidos preferem certos trechos.", "Algumas mudaram de propósito ao longo dos séculos."],
    rumors: ["Uma estrada que aparece só em certas noites.", "Marcos que apontam para lugares que não existem mais.", "Uma carruagem sem cocheiro vista ao amanhecer."],
    tags: ["viagem", "antiguidade", "perigo"] },
  { slug: "alem-do-conhecido", name: "Terras Além do Conhecido", shortDesc: "O que existe nas margens dos mapas, e além delas.", conceptual: true,
    atmosphere: "Horizontes sem nome, climas estranhos, silêncios diferentes.",
    publicKnowledge: ["Poucos voltaram. Menos ainda voltaram lúcidos.", "Mapas antigos divergem completamente.", "Aventureiros ricos financiam expedições que nunca retornam."],
    rumors: ["Cidades flutuantes.", "Mares de areia que respiram.", "Uma luz no horizonte que ninguém consegue alcançar."],
    tags: ["fronteira", "mistério", "viagem"] },
];
