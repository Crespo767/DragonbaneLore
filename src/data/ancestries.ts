export type Ancestry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  archetypes: string[];
  roleplay: string[];
  tags: string[];
};

export const ancestries: Ancestry[] = [
  {
    slug: "humanos",
    name: "Humanos",
    tagline: "Os últimos a nascer, espalhados pelo mundo conhecido.",
    description:
      "Foram os últimos a nascer, mas as lendas de tempos antigos não impediram que se espalhassem por grande parte do mundo. Muitos são camponeses, outros guerreiros que protegem assentamentos vulneráveis. E há os aventureiros: humanos destemidos que se aventuram no desconhecido em busca de glória, ouro e conhecimento.",
    archetypes: ["O cavaleiro errante", "A mercadora de fronteira", "O estudioso curioso", "O fugitivo redimido"],
    roleplay: [
      "Possui a habilidade Inata: Adaptativo.",
      "Sempre há uma promessa ou dívida pendente.",
      "Confia nas outras pessoas com mais facilidade do que deveria.",
    ],
    tags: ["sociedade", "fronteira", "ambição"],
  },
  {
    slug: "anoes",
    name: "Anões",
    tagline: "Os mais velhos dos povos antigos.",
    description:
      "Um povo imensamente orgulhoso e tradicional, cuja cultura está impregnada de costumes antigos e baladas heroicas. Sentem uma forte conexão com o leito rochoso e as raízes do mundo. São artesãos admiráveis de metal e pedra, mas também guerreiros ferozes que brandem armas forjadas em suas profundezas.",
    archetypes: ["O ferreiro implacável", "A guardiã de tumba", "O cronista de runas"],
    roleplay: [
      "Possui a habilidade Inata: Implacável.",
      "Luta brutalmente contra qualquer um que o tenha ferido no passado.",
      "Honrar as memórias de seus ancestrais vale mais que o ouro.",
    ],
    tags: ["montanha", "tradição", "forja"],
  },
  {
    slug: "elfos",
    name: "Elfos",
    tagline: "Guiados pelas estrelas, guardiões das florestas.",
    description:
      "Uma ancestralidade antiga que por eras vigiou as florestas do mundo. São guiados pelas estrelas, a quem consideram seres divinos. Com cultura meditativamente introvertida, são movidos por preocupações metafísicas, embora muitos se tornem guerreiros respeitados por sua habilidade com a espada e o arco.",
    archetypes: ["O caminhante silencioso", "A vidente estelar", "O arqueiro imortal"],
    roleplay: [
      "Possui a habilidade Inata: Paz Interior.",
      "Mede o tempo em eras e não em dias mortais.",
      "Tem o poder de recuperar feridas meditando profundamente.",
    ],
    tags: ["floresta", "estrelas", "meditação"],
  },
  {
    slug: "halflings",
    name: "Halflings",
    tagline: "Amantes do conforto e atraídos por contos épicos.",
    description:
      "Humanoides baixos, modestos e amáveis. Frequentemente encontrados em fazendas montanhosas vivendo em habitações similares a tocas, com despensas bem abastecidas. Não são guerreiros ou ambiciosos, mas a atração por belas canções épicas às vezes os faz deixar a segurança do lar.",
    archetypes: ["A taberneira de orelhas atentas", "O batedor furtivo", "O ouvinte de contos"],
    roleplay: [
      "Possui a habilidade Inata: Difícil de Pegar.",
      "Devido à vulnerabilidade, é incrivelmente bom em esquivar e se esconder.",
      "Acha que a maioria dos problemas se resolve com uma boa refeição e lareira.",
    ],
    tags: ["conforto", "astúcia", "fuga"],
  },
  {
    slug: "lupinos",
    name: "Lupinos",
    tagline: "A fúria indomável das selvas e o pensamento profundo.",
    description:
      "Criaturas altamente inteligentes que combinam uma tendência infalível para ponderar sobre os mistérios do universo com instintos antigos e uma raiva insaciável contra erros do passado. São caçadores e desbravadores inigualáveis, mercenários valentes ou mesmo místicos formidáveis.",
    archetypes: ["A caçadora implacável", "O xamã das veredas", "O mercenário solitário"],
    roleplay: [
      "Possui a habilidade Inata: Instintos de Caça.",
      "Ferve por dentro com a lembrança de crimes cometidos contra a natureza.",
      "Pode seguir o cheiro de sua presa pelo dia inteiro.",
    ],
    tags: ["selva", "fúria", "instinto"],
  },
  {
    slug: "marrecos",
    name: "Marrecos",
    tagline: "Uma pequena fúria assassina no meio do comércio.",
    description:
      "A origem é misteriosa — talvez um experimento mágico falho ou um reino insular afundado. Humanoides emplumados, grasnam agitados por mercados e caravanas, tendo grande talento para o comércio. Ainda assim, alguns são bandidos ou piratas, famosos por serem ferozes em batalha e temidos por sua fúria repentina.",
    archetypes: ["O comerciante colérico", "A pirata dos rios rasos", "O mercenário grasnador"],
    roleplay: [
      "Possui as habilidades Inatas: Mal-humorado e Pés Palmados.",
      "Tem um temperamento colérico que usa para focar no perigo.",
      "Sempre se move a toda velocidade dentro da água.",
    ],
    tags: ["humor negro", "água", "colérico"],
  },
];
