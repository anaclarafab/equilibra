/* Dados do Equilibra — JS simples, sem bibliotecas */

export var produtos = [
  {
    id: "biscoito-integral",
    nome: "Biscoito Integral Aveia",
    marca: "Vita Grãos",
    codigo: "7891000315507",
    emoji: "🍪",
    veredito: "atencao",
    resumo: "Boa fibra, mas o sódio é alto para um lanche.",
    dias: 3,
    insights: [
      { titulo: "Sódio elevado", texto: "Uma porção tem 480 mg — cerca de 20% do limite diário.", tom: "evitar" },
      { titulo: "Rico em fibras", texto: "4,2 g por porção ajudam na saciedade e na digestão.", tom: "bom" },
      { titulo: "Vence em 3 dias", texto: "Consuma logo ou congele para aproveitar depois.", tom: "atencao" }
    ],
    nutrientes: [
      { rotulo: "Sódio", valor: "480 mg", pct: 78, tom: "evitar" },
      { rotulo: "Açúcares", valor: "8 g", pct: 45, tom: "atencao" },
      { rotulo: "Fibras", valor: "4,2 g", pct: 70, tom: "bom" },
      { rotulo: "Gorduras totais", valor: "6 g", pct: 38, tom: "atencao" }
    ],
    alergenicos: ["Glúten", "Pode conter leite"],
    dietas: [
      { rotulo: "Sem glúten", ok: false },
      { rotulo: "Sem lactose", ok: false },
      { rotulo: "Vegetariano", ok: true }
    ]
  },
  {
    id: "leite-sem-lactose",
    nome: "Leite Zero Lactose",
    marca: "Campo Claro",
    codigo: "7896004400112",
    emoji: "🥛",
    veredito: "bom",
    resumo: "Adequado para intolerância à lactose e boa fonte de cálcio.",
    dias: 12,
    insights: [
      { titulo: "Sem lactose", texto: "A lactose já vem quebrada — seguro para intolerantes.", tom: "bom" },
      { titulo: "Fonte de cálcio", texto: "Um copo cobre cerca de 25% do cálcio do dia.", tom: "bom" },
      { titulo: "Depois de aberto", texto: "Consuma em até 3 dias, mesmo dentro da validade.", tom: "atencao" }
    ],
    nutrientes: [
      { rotulo: "Sódio", valor: "120 mg", pct: 22, tom: "bom" },
      { rotulo: "Açúcares", valor: "4,7 g", pct: 30, tom: "bom" },
      { rotulo: "Proteínas", valor: "6,4 g", pct: 68, tom: "bom" },
      { rotulo: "Gorduras saturadas", valor: "3,1 g", pct: 52, tom: "atencao" }
    ],
    alergenicos: ["Leite"],
    dietas: [
      { rotulo: "Sem lactose", ok: true },
      { rotulo: "Sem glúten", ok: true },
      { rotulo: "Vegano", ok: false }
    ]
  },
  {
    id: "refrigerante-cola",
    nome: "Refrigerante Cola 2L",
    marca: "Fresco",
    codigo: "7894900011517",
    emoji: "🥤",
    veredito: "evitar",
    resumo: "Muito açúcar: quase o dobro do recomendado por dia em uma garrafa.",
    dias: 96,
    insights: [
      { titulo: "Açúcar altíssimo", texto: "106 g por garrafa — o equivalente a 21 colheres de chá.", tom: "evitar" },
      { titulo: "Sem valor nutricional", texto: "Não oferece fibras, proteínas nem vitaminas.", tom: "evitar" },
      { titulo: "Embalagem reciclável", texto: "O PET pode ir para a coleta seletiva após enxaguado.", tom: "bom" }
    ],
    nutrientes: [
      { rotulo: "Açúcares", valor: "106 g", pct: 98, tom: "evitar" },
      { rotulo: "Sódio", valor: "90 mg", pct: 18, tom: "bom" },
      { rotulo: "Cafeína", valor: "40 mg", pct: 35, tom: "atencao" },
      { rotulo: "Fibras", valor: "0 g", pct: 4, tom: "evitar" }
    ],
    alergenicos: [],
    dietas: [
      { rotulo: "Sem glúten", ok: true },
      { rotulo: "Sem lactose", ok: true },
      { rotulo: "Vegano", ok: true }
    ]
  },
  {
    id: "iogurte-natural",
    nome: "Iogurte Natural Integral",
    marca: "Serra Viva",
    codigo: "7891025104568",
    emoji: "🥣",
    veredito: "bom",
    resumo: "Poucos ingredientes, sem açúcar adicionado e rico em proteína.",
    dias: 1,
    insights: [
      { titulo: "Vence amanhã", texto: "Use hoje ou amanhã em vitaminas e molhos para não desperdiçar.", tom: "evitar" },
      { titulo: "Sem açúcar adicionado", texto: "O açúcar presente é o natural do leite.", tom: "bom" },
      { titulo: "Probióticos", texto: "Culturas vivas que ajudam a flora intestinal.", tom: "bom" }
    ],
    nutrientes: [
      { rotulo: "Proteínas", valor: "5,8 g", pct: 65, tom: "bom" },
      { rotulo: "Açúcares", valor: "4,1 g", pct: 26, tom: "bom" },
      { rotulo: "Sódio", valor: "60 mg", pct: 12, tom: "bom" },
      { rotulo: "Gorduras saturadas", valor: "2,4 g", pct: 40, tom: "atencao" }
    ],
    alergenicos: ["Leite"],
    dietas: [
      { rotulo: "Sem glúten", ok: true },
      { rotulo: "Sem lactose", ok: false },
      { rotulo: "Vegetariano", ok: true }
    ]
  }
];

export var despensa = [
  { id: "iogurte-natural", dias: 1, qtd: "1 pote" },
  { id: "biscoito-integral", dias: 3, qtd: "2 pacotes" },
  { id: "leite-sem-lactose", dias: 12, qtd: "1 L" },
  { id: "refrigerante-cola", dias: 96, qtd: "1 garrafa" }
];

export var historico = [
  { id: "iogurte-natural", quando: "Hoje, 09:12" },
  { id: "refrigerante-cola", quando: "Ontem, 19:40" },
  { id: "biscoito-integral", quando: "Ontem, 18:55" },
  { id: "leite-sem-lactose", quando: "Seg, 08:20" }
];

export var comprasIniciais = [
  { nome: "Arroz integral 1kg", por: "Ana Clara", feito: false },
  { nome: "Leite zero lactose", por: "Você", feito: false },
  { nome: "Banana prata", por: "Henrique", feito: false },
  { nome: "Pão sem glúten", por: "Mariana", feito: true },
  { nome: "Azeite extra virgem", por: "Você", feito: true }
];

export var rotuloVeredito = { bom: "Boa escolha", atencao: "Atenção", evitar: "Evitar" };

var alternativas = {
  "biscoito-integral": [
    "Torrada integral sem adição de açúcar",
    "Fruta fresca com iogurte natural"
  ],
  "leite-sem-lactose": [
    "Leite sem lactose sem açúcar adicionado",
    "Bebida vegetal enriquecida com cálcio"
  ],
  "refrigerante-cola": [
    "Água com gás, limão e gelo",
    "Chá gelado sem açúcar"
  ],
  "iogurte-natural": [
    "Iogurte natural com fruta e aveia",
    "Kefir natural sem açúcar"
  ]
};

export function alternativasSaudaveis(id) {
  return alternativas[id] || ["Prefira uma opção com menos açúcar, sódio e ingredientes."];
}

export function sugestaoDeConsumo(produto) {
  if (produto.dias <= 2) {
    return "Está perto do vencimento: use hoje em uma receita, lanche ou congele, quando apropriado.";
  }
  if (produto.dias <= 7) {
    return "Planeje o consumo nesta semana e deixe o item visível na geladeira ou despensa.";
  }
  return "Guarde seguindo a embalagem e use o item na ordem em que foi comprado.";
}

export function acharProduto(id) {
  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) return produtos[i];
  }
  return null;
}

export function textoValidade(dias) {
  if (dias === 1) return "Vence amanhã";
  return "Vence em " + dias + " dias";
}

export function tomDaValidade(dias) {
  if (dias <= 2) return "evitar";
  if (dias <= 7) return "atencao";
  return "bom";
}
