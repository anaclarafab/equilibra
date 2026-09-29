
var produtos = [
  {
    id: "biscoito-integral",
    nome: "Biscoito Integral Aveia",
    marca: "Vita Grãos",
    código: "7891000315507",
    emoji: "🍪",
    veredito: "atencao",
    resumo: "Boa fibra, mas o sódio e alto para um lanche.",
    dias: 3,
    insights: [
      { titulo: "Sódio elevado", texto: "Uma porção tem 480 mg — cerca de 20% do limite diário.", tom: "evitar" },
      { titulo: "Rico em fibras", texto: "4,2 g por porção ajudam na saciedade e na digestao.", tom: "bom" },
      { titulo: "Vence em 3 dias", texto: "Consuma logo ou congele para aproveitar depois.", tom: "atencao" }
    ],
    nutrientes: [
      { rotulo: "Sódio", valor: "480 mg", pct: 78, tom: "evitar" },
      { rotulo: "Açúcares", valor: "8 g", pct: 45, tom: "atencao" },
      { rotulo: "Fibras", valor: "4,2 g", pct: 70, tom: "bom" },
      { rotulo: "Gorduras totais", valor: "6 g", pct: 38, tom: "atencao" }
    ],
    alergênicos: ["Glúten", "Pode conter leite"],
    dietas: [
      { rotulo: "Sem gluten", ok: false },
      { rotulo: "Sem lactose", ok: false },
      { rotulo: "Vegetariano", ok: true }
    ]
  },
  {
    id: "leite-sem-lactose",
    nome: "Leite Zero Lactose",
    marca: "Campo Claro",
    código: "7896004400112",
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
    alergênicos: ["Leite"],
    dietas: [
      { rotulo: "Sem lactose", ok: true },
      { rotulo: "Sem gluten", ok: true },
      { rotulo: "Vegano", ok: false }
    ]
  },
  {
    id: "refrigerante-cola",
    nome: "Refrigerante Cola 2L",
    marca: "Fresco",
    código: "7894900011517",
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
    alergênicos: [],
    dietas: [
      { rotulo: "Sem gluten", ok: true },
      { rotulo: "Sem lactose", ok: true },
      { rotulo: "Vegano", ok: true }
    ]
  },
  {
    id: "iogurte-natural",
    nome: "Iogurte Natural Integral",
    marca: "Serra Viva",
    código: "7891025104568",
    emoji: "🥣",
    veredito: "bom",
    resumo: "Poucos ingredientes, sem açúcar adicionado e rico em proteina.",
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
    alergênicos: ["Leite"],
    dietas: [
      { rotulo: "Sem gluten", ok: true },
      { rotulo: "Sem lactose", ok: false },
      { rotulo: "Vegetariano", ok: true }
    ]
  }
];

var despensa = [
  { id: "iogurte-natural", dias: 1, qtd: "1 pote" },
  { id: "biscoito-integral", dias: 3, qtd: "2 pacotes" },
  { id: "leite-sem-lactose", dias: 12, qtd: "1 L" },
  { id: "refrigerante-cola", dias: 96, qtd: "1 garrafa" }
];

var historico = [
  { id: "iogurte-natural", quando: "Hoje, 09:12" },
  { id: "refrigerante-cola", quando: "Ontem, 19:40" },
  { id: "biscoito-integral", quando: "Ontem, 18:55" },
  { id: "leite-sem-lactose", quando: "Seg, 08:20" }
];

var compras = [
  { nome: "Arroz integral 1kg", por: "Ana Clara", feito: false },
  { nome: "Leite zero lactose", por: "Você", feito: false },
  { nome: "Banana prata", por: "Henrique", feito: false },
  { nome: "Pão sem gluten", por: "Mariana", feito: true },
  { nome: "Azeite extra virgem", por: "Você", feito: true }
];

var rotuloVeredito = { bom: "Boa escolha", atencao: "Atenção", evitar: "Evitar" };

function el(id) { return document.getElementById(id); }

function acharProduto(id) {
  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) return produtos[i];
  }
  return null;
}

function textoValidade(dias) {
  if (dias === 1) return "Vence amanhã";
  if (dias < 7) return "Vence em " + dias + " dias";
  return "Vence em " + dias + " dias";
}

function tomDaValidade(dias) {
  if (dias <= 2) return "evitar";
  if (dias <= 7) return "atencao";
  return "bom";
}

function mostrarTela(nome) {
  var telas = document.querySelectorAll(".screen");
  for (var i = 0; i < telas.length; i++) {
    telas[i].classList.remove("is-active");
  }
  var alvo = el("tela-" + nome);
  if (alvo) alvo.classList.add("is-active");

  var abas = document.querySelectorAll(".tab");
  for (var j = 0; j < abas.length; j++) {
    if (abas[j].getAttribute("data-goto") === nome) {
      abas[j].classList.add("is-active");
    } else {
      abas[j].classList.remove("is-active");
    }
  }
  window.scrollTo(0, 0);
}

document.addEventListener("click", function (evento) {
  var botao = evento.target.closest("[data-goto]");
  if (botao) mostrarTela(botao.getAttribute("data-goto"));
});

function cartaoProduto(produto, legenda, pilula, tomPilula) {
  var botao = document.createElement("button");
  botao.className = "card";
  botao.type = "button";
  botao.innerHTML =
    '<span class="emoji-badge">' + produto.emoji + "</span>" +
    '<span class="grow"><strong>' + produto.nome + "</strong><small>" + legenda + "</small></span>" +
    '<span class="pill pill-' + tomPilula + '">' + pilula + "</span>";
  botao.onclick = function () { abrirProduto(produto.id); };
  return botao;
}

function montarRecentes() {
  var alvo = el("lista-recentes");
  alvo.innerHTML = "";
  for (var i = 0; i < 3; i++) {
    var p = acharProduto(historico[i].id);
    alvo.appendChild(cartaoProduto(p, historico[i].quando, rotuloVeredito[p.veredito], p.veredito));
  }
}

function montarProdutosTeste() {
  var alvo = el("lista-produtos");
  alvo.innerHTML = "";
  for (var i = 0; i < produtos.length; i++) {
    var p = produtos[i];
    alvo.appendChild(cartaoProduto(p, "Código " + p.código, rotuloVeredito[p.veredito], p.veredito));
  }
}

function montarDespensa() {
  var alvo = el("lista-despensa");
  alvo.innerHTML = "";
  for (var i = 0; i < despensa.length; i++) {
    var item = despensa[i];
    var p = acharProduto(item.id);
    alvo.appendChild(
      cartaoProduto(p, item.qtd + " · " + textoValidade(item.dias), item.dias + "d", tomDaValidade(item.dias))
    );
  }
}

function montarHistorico() {
  var alvo = el("lista-historico");
  alvo.innerHTML = "";
  for (var i = 0; i < historico.length; i++) {
    var p = acharProduto(historico[i].id);
    alvo.appendChild(cartaoProduto(p, historico[i].quando, rotuloVeredito[p.veredito], p.veredito));
  }
}

function abrirProduto(id) {
  var p = acharProduto(id);
  if (!p) return;

  var html = "";
  html += '<div class="prod-head">';
  html += '<div class="emoji-grande">' + p.emoji + "</div>";
  html += "<h2>" + p.nome + "</h2>";
  html += '<p class="marca">' + p.marca + " · " + p.código + "</p>";
  html += '<p class="headline">' + p.resumo + "</p>";
  html += '<span class="pill pill-' + p.veredito + '">' + rotuloVeredito[p.veredito] + "</span>";
  html += "</div>";

  html += '<h2 class="section-title">O que a IA entendeu</h2><div class="list">';
  for (var i = 0; i < p.insights.length; i++) {
    var ins = p.insights[i];
    html += '<div class="insight tone-' + ins.tom + '"><strong>' + ins.titulo + "</strong><p>" + ins.texto + "</p></div>";
  }
  html += "</div>";

  html += '<h2 class="section-title">Tabela nutricional</h2><div class="nutri">';
  for (var j = 0; j < p.nutrientes.length; j++) {
    var n = p.nutrientes[j];
    html += '<div class="nutri-linha"><div class="nutri-topo"><span>' + n.rotulo + "</span><span>" + n.valor + "</span></div>";
    html += '<div class="barra"><span class="tone-' + n.tom + '" style="width:' + n.pct + '%"></span></div></div>';
  }
  html += "</div>";

  html += '<h2 class="section-title">Alergênicos</h2><div class="tags">';
  if (p.alergênicos.length === 0) {
    html += '<span class="tag ok">Nenhum alergênico declarado</span>';
  } else {
    for (var k = 0; k < p.alergênicos.length; k++) {
      html += '<span class="tag no">' + p.alergênicos[k] + "</span>";
    }
  }
  html += "</div>";

  html += '<h2 class="section-title">Dietas</h2><div class="tags">';
  for (var d = 0; d < p.dietas.length; d++) {
    var dieta = p.dietas[d];
    html += '<span class="tag ' + (dieta.ok ? "ok" : "no") + '">' + (dieta.ok ? "✓ " : "✕ ") + dieta.rotulo + "</span>";
  }
  html += "</div>";

  html += '<h2 class="section-title">Validade</h2>';
  html += '<div class="note">📅 ' + textoValidade(p.dias) + ". Vamos te lembrar 2 dias antes.</div>";

  el("produto-detalhe").innerHTML = html;
  mostrarTela("produto");
}

el("btn-scan").onclick = function () {
  var scanner = el("scanner");
  var status = el("scan-status");
  scanner.classList.add("is-lendo");
  status.textContent = "Lendo código de barras...";

  setTimeout(function () {
    status.textContent = "Consultando base de produtos...";
  }, 700);

  setTimeout(function () {
    status.textContent = "IA interpretando o rótulo...";
  }, 1400);

  setTimeout(function () {
    scanner.classList.remove("is-lendo");
    status.textContent = "Câmera pronta";
    var sorteado = produtos[Math.floor(Math.random() * produtos.length)];
    abrirProduto(sorteado.id);
  }, 2100);
};

function montarCompras() {
  var alvo = el("lista-compras");
  alvo.innerHTML = "";
  var feitos = 0;

  for (var i = 0; i < compras.length; i++) {
    (function (indice) {
      var item = compras[indice];
      if (item.feito) feitos++;

      var linha = document.createElement("div");
      linha.className = "card item" + (item.feito ? " feito" : "");
      linha.style.cursor = "default";
      linha.innerHTML =
        '<button class="check" type="button">' + (item.feito ? "✓" : "") + "</button>" +
        '<span class="grow"><strong>' + item.nome + "</strong><small>Por " + item.por + "</small></span>" +
        '<button class="remove" type="button" title="Remover">✕</button>';

      linha.querySelector(".check").onclick = function () {
        compras[indice].feito = !compras[indice].feito;
        montarCompras();
      };
      linha.querySelector(".remove").onclick = function () {
        compras.splice(indice, 1);
        montarCompras();
      };

      alvo.appendChild(linha);
    })(i);
  }

  var total = compras.length;
  var pct = total === 0 ? 0 : Math.round((feitos / total) * 100);
  el("barra-lista").style.width = pct + "%";
  el("texto-lista").textContent = feitos + " de " + total + " comprados";
}

el("form-item").onsubmit = function (evento) {
  evento.preventDefault();
  var campo = el("input-item");
  var texto = campo.value.trim();
  if (texto === "") return;
  compras.unshift({ nome: texto, por: "Você", feito: false });
  campo.value = "";
  montarCompras();
};

montarRecentes();
montarProdutosTeste();
montarDespensa();
montarHistorico();
montarCompras();
