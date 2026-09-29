import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  StatusBar,
  Platform
} from "react-native";
import { estilos, cores, tons, aplicarTema } from "./src/estilos";
import {
  produtos,
  despensa,
  historico,
  comprasIniciais,
  rotuloVeredito,
  acharProduto,
  textoValidade,
  tomDaValidade,
  alternativasSaudaveis,
  sugestaoDeConsumo
} from "./src/dados";



function Pilula(props) {
  var cor = tons[props.tom] || cores.destaque;
  var simbolo = props.tom === "bom" ? "✓ " : props.tom === "atencao" ? "! " : props.tom === "evitar" ? "× " : "";
  return (
    <View style={[estilos.pilula, { backgroundColor: cor + "22" }]} accessibilityLabel={"Classificação: " + props.texto}>
      <Text style={[estilos.pilulaTexto, { color: cor }]}>{simbolo + props.texto}</Text>
    </View>
  );
}

function CartaoProduto(props) {
  var p = props.produto;
  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={props.aoTocar}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={p.nome + ". " + props.legenda + ". " + props.pilula}
      accessibilityHint="Abre os detalhes do produto"
    >
      <View style={estilos.emojiBadge}>
        <Text style={estilos.emoji}>{p.emoji}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={estilos.cartaoNome}>{p.nome}</Text>
        <Text style={estilos.cartaoSub}>{props.legenda}</Text>
      </View>
      <Pilula texto={props.pilula} tom={props.tomPilula} />
    </TouchableOpacity>
  );
}

/* ---------- telas ---------- */

function TelaInicio(props) {
  return (
    <View>
      <View style={estilos.hero}>
        <Text style={estilos.heroOi}>Olá, Ana Clara 👋</Text>
        <Text style={estilos.heroTitulo}>O que você vai{"\n"}consumir hoje?</Text>
        <Text style={estilos.heroSub}>
          Aponte a câmera para o código de barras e receba a leitura do rótulo em linguagem simples.
        </Text>
        <TouchableOpacity style={estilos.botao} onPress={function () { props.irPara("escanear"); }}>
          <Text style={estilos.botaoTexto}>Escanear produto</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.linhaStats}>
        <View style={estilos.stat}>
          <Text style={estilos.statNum}>4</Text>
          <Text style={estilos.statLbl}>Escaneados</Text>
        </View>
        <View style={estilos.stat}>
          <Text style={[estilos.statNum, { color: cores.amarelo }]}>2</Text>
          <Text style={estilos.statLbl}>Vencendo</Text>
        </View>
        <View style={estilos.stat}>
          <Text style={[estilos.statNum, { color: cores.verde }]}>R$ 38</Text>
          <Text style={estilos.statLbl}>Economizados</Text>
        </View>
      </View>

      <Text style={estilos.tituloSecao}>Vence em breve</Text>
      <CartaoProduto
        produto={acharProduto("iogurte-natural")}
        legenda="Vence amanhã · 1 pote"
        pilula="1 dia"
        tomPilula="evitar"
        aoTocar={function () { props.abrirProduto("iogurte-natural"); }}
      />

      <Text style={estilos.tituloSecao}>Escaneados recentemente</Text>
      {historico.slice(0, 3).map(function (h) {
        var p = acharProduto(h.id);
        return (
          <CartaoProduto
            key={h.id}
            produto={p}
            legenda={h.quando}
            pilula={rotuloVeredito[p.veredito]}
            tomPilula={p.veredito}
            aoTocar={function () { props.abrirProduto(p.id); }}
          />
        );
      })}
    </View>
  );
}

function TelaEscanear(props) {
  var [status, setStatus] = useState("Câmera pronta");
  var [lendo, setLendo] = useState(false);
  var posicao = useRef(new Animated.Value(0)).current;

  useEffect(function () {
    var animacao = Animated.loop(
      Animated.sequence([
        Animated.timing(posicao, { toValue: 150, duration: 1200, useNativeDriver: true }),
        Animated.timing(posicao, { toValue: 0, duration: 1200, useNativeDriver: true })
      ])
    );
    animacao.start();
    return function () { animacao.stop(); };
  }, []);

  function simular() {
    if (lendo) return;
    setLendo(true);
    setStatus("Lendo código de barras...");
    setTimeout(function () { setStatus("Consultando base de produtos..."); }, 700);
    setTimeout(function () { setStatus("IA interpretando o rótulo..."); }, 1400);
    setTimeout(function () {
      setLendo(false);
      setStatus("Câmera pronta");
      var sorteado = produtos[Math.floor(Math.random() * produtos.length)];
      props.abrirProduto(sorteado.id);
    }, 2100);
  }

  var barras = [];
  for (var i = 0; i < 14; i++) {
    barras.push(
      <View key={i} style={[estilos.barra, { height: 40 + ((i * 13) % 45) }]} />
    );
  }

  return (
    <View>
      <Text style={estilos.tituloPagina}>Escanear</Text>
      <Text style={estilos.subPagina}>Centralize o código de barras dentro da moldura.</Text>

      <View style={estilos.scanner}>
        <View style={estilos.moldura}>
          <View style={estilos.barras}>{barras}</View>
          <Animated.View style={[estilos.laser, { transform: [{ translateY: posicao }], top: 20 }]} />
        </View>
        <Text style={estilos.statusScan}>{status}</Text>
      </View>

      <TouchableOpacity style={estilos.botao} onPress={simular}>
        <Text style={estilos.botaoTexto}>Simular leitura</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloSecao}>Ou escolha um produto de teste</Text>
      {produtos.map(function (p) {
        return (
          <CartaoProduto
            key={p.id}
            produto={p}
            legenda={"Código " + p.codigo}
            pilula={rotuloVeredito[p.veredito]}
            tomPilula={p.veredito}
            aoTocar={function () { props.abrirProduto(p.id); }}
          />
        );
      })}
    </View>
  );
}

function TelaProduto(props) {
  var p = acharProduto(props.produtoId);
  if (!p) return null;

  return (
    <View>
      <TouchableOpacity onPress={props.voltar}>
        <Text style={estilos.voltar}>← Voltar</Text>
      </TouchableOpacity>

      <View style={estilos.detalheTopo}>
        <Text style={estilos.emojiGrande}>{p.emoji}</Text>
        <Text style={estilos.nomeProduto}>{p.nome}</Text>
        <Text style={estilos.marcaProduto}>{p.marca + " · " + p.codigo}</Text>
        <Text style={estilos.resumo}>{p.resumo}</Text>
        <View style={{ marginTop: 10 }}>
          <Pilula texto={rotuloVeredito[p.veredito]} tom={p.veredito} />
        </View>
      </View>

      <Text style={estilos.tituloSecao}>O que a IA entendeu</Text>
      {p.insights.map(function (ins, i) {
        return (
          <View key={i} style={[estilos.insight, { borderLeftColor: tons[ins.tom] }]}>
            <Text style={estilos.insightTitulo}>{ins.titulo}</Text>
            <Text style={estilos.insightTexto}>{ins.texto}</Text>
          </View>
        );
      })}

      <Text style={estilos.tituloSecao}>Aproveite antes de vencer</Text>
      <View style={estilos.nota} accessibilityLabel={"Sugestão de consumo: " + sugestaoDeConsumo(p)}>
        <Text style={estilos.notaTitulo}>Dica prática</Text>
        <Text style={estilos.notaTexto}>{sugestaoDeConsumo(p)}</Text>
      </View>

      <Text style={estilos.tituloSecao}>Alternativas mais saudáveis</Text>
      {alternativasSaudaveis(p.id).map(function (alternativa, i) {
        return (
          <View key={alternativa} style={estilos.alternativa}>
            <Text style={estilos.alternativaIcone} accessibilityElementsHidden={true}>✓</Text>
            <Text style={estilos.alternativaTexto}>{alternativa}</Text>
          </View>
        );
      })}

      <Text style={estilos.tituloSecao}>Tabela nutricional</Text>
      {p.nutrientes.map(function (n, i) {
        return (
          <View key={i} style={estilos.nutriLinha}>
            <View style={estilos.nutriTopo}>
              <Text style={estilos.nutriTexto}>{n.rotulo}</Text>
              <Text style={estilos.nutriTexto}>{n.valor}</Text>
            </View>
            <View style={estilos.trilha}>
              <View style={[estilos.preenchimento, { width: n.pct + "%", backgroundColor: tons[n.tom] }]} />
            </View>
          </View>
        );
      })}

      <Text style={estilos.tituloSecao}>Alergênicos</Text>
      <View style={estilos.tags}>
        {p.alergenicos.length === 0 ? (
          <View style={[estilos.tag, { borderColor: cores.verde }]}>
            <Text style={[estilos.tagTexto, { color: cores.verde }]}>Nenhum alergênico declarado</Text>
          </View>
        ) : (
          p.alergenicos.map(function (a, i) {
            return (
              <View key={i} style={[estilos.tag, { borderColor: cores.vermelho }]}>
                <Text style={[estilos.tagTexto, { color: cores.vermelho }]}>{a}</Text>
              </View>
            );
          })
        )}
      </View>

      <Text style={estilos.tituloSecao}>Dietas</Text>
      <View style={estilos.tags}>
        {p.dietas.map(function (d, i) {
          var cor = d.ok ? cores.verde : cores.vermelho;
          return (
            <View key={i} style={[estilos.tag, { borderColor: cor }]}>
              <Text style={[estilos.tagTexto, { color: cor }]}>{(d.ok ? "✓ " : "✕ ") + d.rotulo}</Text>
            </View>
          );
        })}
      </View>

      <Text style={estilos.tituloSecao}>Validade</Text>
      <View style={estilos.nota} accessibilityLabel={textoValidade(p.dias) + ". Lembrete programado para dois dias antes."}>
        <Text style={estilos.notaTexto}>{textoValidade(p.dias) + ". Vamos te lembrar 2 dias antes."}</Text>
      </View>

      <TouchableOpacity
        style={estilos.botaoLista}
        onPress={function () { props.adicionarALista(p.nome); }}
        accessibilityRole="button"
        accessibilityLabel={"Adicionar " + p.nome + " à lista de compras"}
        accessibilityHint="Abre a lista de compras após adicionar o item"
      >
        <Text style={estilos.botaoListaTexto}>+ Adicionar à lista de compras</Text>
      </TouchableOpacity>
    </View>
  );
}

function TelaValidade(props) {
  return (
    <View>
      <Text style={estilos.tituloPagina}>Validade</Text>
      <Text style={estilos.subPagina}>Sua despensa organizada pelo que vence primeiro.</Text>
      {despensa.map(function (item) {
        var p = acharProduto(item.id);
        return (
          <CartaoProduto
            key={item.id}
            produto={p}
            legenda={item.qtd + " · " + textoValidade(item.dias)}
            pilula={item.dias + "d"}
            tomPilula={tomDaValidade(item.dias)}
            aoTocar={function () { props.abrirProduto(p.id); }}
          />
        );
      })}
      <Text style={estilos.nota}>Enviamos um lembrete 2 dias antes de cada vencimento.</Text>
    </View>
  );
}

function TelaLista(props) {
  var compras = props.compras;
  var setCompras = props.setCompras;
  var [texto, setTexto] = useState("");

  function alternar(indice) {
    var copia = compras.slice();
    copia[indice] = { nome: copia[indice].nome, por: copia[indice].por, feito: !copia[indice].feito };
    setCompras(copia);
  }

  function remover(indice) {
    var copia = compras.slice();
    copia.splice(indice, 1);
    setCompras(copia);
  }

  function adicionar() {
    var limpo = texto.trim();
    if (limpo === "") return;
    setCompras([{ nome: limpo, por: "Você", feito: false }].concat(compras));
    setTexto("");
  }

  var feitos = compras.filter(function (c) { return c.feito; }).length;
  var pct = compras.length === 0 ? 0 : Math.round((feitos / compras.length) * 100);

  return (
    <View>
      <Text style={estilos.tituloPagina}>Lista de compras</Text>
      <Text style={estilos.subPagina}>Compartilhada com a sua casa.</Text>

      <View style={estilos.linhaAdd}>
        <TextInput
          style={estilos.input}
          placeholder="Adicionar item…"
          placeholderTextColor={cores.suave}
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={adicionar}
          accessibilityLabel="Novo item da lista de compras"
        />
        <TouchableOpacity style={estilos.botaoMais} onPress={adicionar} accessibilityRole="button" accessibilityLabel="Adicionar item à lista">
          <Text style={estilos.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.trilha}>
        <View style={[estilos.preenchimento, { width: pct + "%", backgroundColor: cores.destaque }]} />
      </View>
      <Text style={[estilos.cartaoSub, { marginTop: 6, marginBottom: 14 }]}>
        {feitos + " de " + compras.length + " comprados"}
      </Text>

      {compras.map(function (item, i) {
        return (
          <View key={item.nome + i} style={estilos.cartao}>
            <TouchableOpacity
              style={estilos.check}
              onPress={function () { alternar(i); }}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: item.feito }}
              accessibilityLabel={item.nome}
            >
              <Text style={estilos.checkTexto}>{item.feito ? "✓" : ""}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  estilos.cartaoNome,
                  item.feito ? { textDecorationLine: "line-through", color: cores.suave } : null
                ]}
              >
                {item.nome}
              </Text>
              <Text style={estilos.cartaoSub}>{"Por " + item.por}</Text>
            </View>
            <TouchableOpacity onPress={function () { remover(i); }} accessibilityRole="button" accessibilityLabel={"Remover " + item.nome + " da lista"} style={estilos.botaoRemover}>
              <Text style={estilos.remover}>✕</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

function TelaHistorico(props) {
  return (
    <View>
      <Text style={estilos.tituloPagina}>Histórico</Text>
      <Text style={estilos.subPagina}>Tudo o que você já escaneou.</Text>
      {historico.map(function (h, i) {
        var p = acharProduto(h.id);
        return (
          <CartaoProduto
            key={h.id + i}
            produto={p}
            legenda={h.quando}
            pilula={rotuloVeredito[p.veredito]}
            tomPilula={p.veredito}
            aoTocar={function () { props.abrirProduto(p.id); }}
          />
        );
      })}
    </View>
  );
}

/* ---------- app ---------- */

var abas = [
  { id: "inicio", icone: "⌂", nome: "Início" },
  { id: "escanear", icone: "⌕", nome: "Escanear" },
  { id: "validade", icone: "◷", nome: "Validade" },
  { id: "lista", icone: "☷", nome: "Lista" },
  { id: "historico", icone: "↶", nome: "Histórico" }
];

export default function App() {
  var [tela, setTela] = useState("inicio");
  var [produtoId, setProdutoId] = useState(null);
  var [telaAnterior, setTelaAnterior] = useState("inicio");
  var [modoEscuro] = useState(false);
  var [compras, setCompras] = useState(comprasIniciais);
  var [exibindoAbertura, setExibindoAbertura] = useState(true);

  aplicarTema(modoEscuro);

  useEffect(function () {
    var temporizador = setTimeout(function () { setExibindoAbertura(false); }, 3000);
    return function () { clearTimeout(temporizador); };
  }, []);

  function abrirProduto(id) {
    setProdutoId(id);
    setTelaAnterior(tela === "produto" ? telaAnterior : tela);
    setTela("produto");
  }

  function adicionarProdutoALista(nome) {
    var jaNaLista = compras.some(function (item) { return item.nome.toLowerCase() === nome.toLowerCase() && !item.feito; });
    if (!jaNaLista) {
      setCompras([{ nome: nome, por: "Você", feito: false }].concat(compras));
    }
    setTela("lista");
  }

  if (exibindoAbertura) {
    return (
      <SafeAreaView style={estilos.abertura}>
        <StatusBar barStyle="light-content" backgroundColor={cores.destaque} />
        <View style={estilos.aberturaConteudo}>
          <View style={estilos.aberturaLogoFundo}>
            <Image
              source={require("./assets/equilibra-logo.png")}
              style={estilos.aberturaLogo}
              resizeMode="contain"
              accessibilityLabel="Equilibra"
            />
          </View>
          <Text style={estilos.aberturaTexto}>Escolhas saudáveis para o seu dia</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={estilos.tela}>
      <StatusBar barStyle={modoEscuro ? "light-content" : "dark-content"} backgroundColor={cores.fundo} />
      <View style={[estilos.topo, Platform.OS === "android" ? { paddingTop: 28 } : { paddingTop: 8 }]}>
        <View style={estilos.marca}>
          <Image
            source={require("./assets/equilibra-logo.png")}
            style={estilos.logoImagemCabecalho}
            resizeMode="contain"
            accessibilityLabel="Logo Equilibra"
          />
          <View>
            <Text style={estilos.marcaNome}>Equilibra</Text>
            <Text style={estilos.marcaSub}>Leitura inteligente de produtos</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={estilos.avatar}>
            <Text style={estilos.avatarTexto}>AC</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={estilos.conteudo} keyboardShouldPersistTaps="handled">
        {tela === "inicio" ? <TelaInicio irPara={setTela} abrirProduto={abrirProduto} /> : null}
        {tela === "escanear" ? <TelaEscanear abrirProduto={abrirProduto} /> : null}
        {tela === "produto" ? (
          <TelaProduto
            produtoId={produtoId}
            voltar={function () { setTela(telaAnterior); }}
            adicionarALista={adicionarProdutoALista}
          />
        ) : null}
        {tela === "validade" ? <TelaValidade abrirProduto={abrirProduto} /> : null}
        {tela === "lista" ? <TelaLista compras={compras} setCompras={setCompras} /> : null}
        {tela === "historico" ? <TelaHistorico abrirProduto={abrirProduto} /> : null}
      </ScrollView>

      <View style={estilos.abas}>
        {abas.map(function (a) {
          var ativa = tela === a.id;
          return (
            <TouchableOpacity
              key={a.id}
              style={estilos.aba}
              onPress={function () { setTela(a.id); }}
              accessibilityRole="tab"
              accessibilityState={{ selected: ativa }}
              accessibilityLabel={a.nome}
            >
              <Text style={[estilos.abaEmoji, ativa ? estilos.abaTextoAtiva : null]}>{a.icone}</Text>
              <Text style={[estilos.abaTexto, ativa ? estilos.abaTextoAtiva : null]}>{a.nome}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
