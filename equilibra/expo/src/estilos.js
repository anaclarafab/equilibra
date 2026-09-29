import { StyleSheet } from "react-native";

var temas = {
  escuro: {
  fundo: "#0f1a14",
  cartao: "#17251d",
  borda: "#233529",
  texto: "#eef5ef",
  suave: "#9fb3a5",
  verde: "#4ade80",
  amarelo: "#fbbf24",
  vermelho: "#f87171",
  destaque: "#2dd4a7",
  fundoElevado: "#12281f",
  fundoScanner: "#0c1712",
  fundoEmoji: "#1e3126",
  textoBotao: "#08150f"
  },
  claro: {
  fundo: "#f5fbf7",
  cartao: "#ffffff",
  borda: "#dcebe1",
  texto: "#0d2018",
  suave: "#527063",
  verde: "#20a361",
  amarelo: "#df9516",
  vermelho: "#ef5156",
  destaque: "#209d60",
  fundoElevado: "#e2f7ea",
  fundoScanner: "#edf8f0",
  fundoEmoji: "#e0f6e8",
  textoBotao: "#ffffff"
  }
};

export var cores = temas.escuro;
export var tons = {
  bom: cores.verde,
  atencao: cores.amarelo,
  evitar: cores.vermelho
};

function criarEstilos(paleta) {
  var cores = paleta;
  var tons = {
    bom: cores.verde,
    atencao: cores.amarelo,
    evitar: cores.vermelho
  };
  return StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  topo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda
  },
  marca: { flexDirection: "row", alignItems: "center", gap: 10 },
  iconeMarca: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: cores.destaque,
    alignItems: "center",
    justifyContent: "center"
  },
  iconeMarcaTexto: { fontSize: 16 },
  logoImagemCabecalho: { width: 42, height: 42 },
  marcaNome: { color: cores.texto, fontSize: 14, fontWeight: "800" },
  marcaSub: { color: cores.suave, fontSize: 9 },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: cores.cartao,
    borderWidth: 1,
    borderColor: cores.borda,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarTexto: { color: cores.destaque, fontWeight: "800", fontSize: 11 },

  abertura: { flex: 1, backgroundColor: cores.destaque },
  aberturaConteudo: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  aberturaLogoFundo: {
    width: 230,
    height: 230,
    backgroundColor: "#ffffff",
    borderRadius: 115,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#073d26",
    shadowOpacity: 0.24,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8
  },
  aberturaLogo: { width: 205, height: 205 },
  aberturaTexto: { color: "#ecfff3", fontSize: 14, fontWeight: "700", marginTop: 24 },

  conteudo: { paddingHorizontal: 10, paddingTop: 12, paddingBottom: 28 },

  hero: {
    backgroundColor: "#0d5a3e",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16
  },
  heroOi: { color: "#d5fae4", fontWeight: "700", marginBottom: 6, fontSize: 12 },
  heroTitulo: { color: "#ffffff", fontSize: 24, fontWeight: "900", lineHeight: 26 },
  heroSub: { color: "#e1f7e9", marginTop: 10, lineHeight: 16, fontSize: 12 },

  botao: {
    backgroundColor: cores.destaque,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16
  },
  botaoTexto: { color: cores.textoBotao, fontWeight: "800", fontSize: 12 },

  linhaStats: { flexDirection: "row", gap: 8, marginBottom: 16 },
  stat: {
    flex: 1,
    backgroundColor: cores.cartao,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: cores.borda,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#24613f",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2
  },
  statNum: { color: cores.texto, fontSize: 15, fontWeight: "900" },
  statLbl: { color: cores.suave, fontSize: 9, marginTop: 2 },

  tituloSecao: {
    color: cores.texto,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 10
  },
  tituloPagina: { color: cores.texto, fontSize: 20, fontWeight: "900" },
  subPagina: { color: cores.suave, marginTop: 3, marginBottom: 14, fontSize: 11 },

  cartao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: cores.cartao,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 10,
    minHeight: 64,
    marginBottom: 9,
    shadowColor: "#1f6743",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3
  },
  emojiBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: cores.fundoEmoji,
    alignItems: "center",
    justifyContent: "center"
  },
  emoji: { fontSize: 18 },
  cartaoNome: { color: cores.texto, fontWeight: "800", fontSize: 12 },
  cartaoSub: { color: cores.suave, fontSize: 10, marginTop: 1 },

  pilula: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 999 },
  pilulaTexto: { fontSize: 9, fontWeight: "800" },

  scanner: {
    backgroundColor: "#09271c",
    borderRadius: 18,
    padding: 14,
    alignItems: "center"
  },
  moldura: {
    width: "100%",
    height: 170,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: cores.destaque,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  laser: { height: 2, width: "80%", backgroundColor: cores.destaque, position: "absolute" },
  barras: { flexDirection: "row", gap: 3, alignItems: "flex-end" },
  barra: { width: 4, backgroundColor: cores.texto, borderRadius: 2 },
  statusScan: { color: "#a9f2c9", marginTop: 12, fontSize: 10, fontWeight: "700" },

  detalheTopo: { alignItems: "center", marginBottom: 18 },
  emojiGrande: { fontSize: 52 },
  nomeProduto: { color: cores.texto, fontSize: 22, fontWeight: "800", textAlign: "center", marginTop: 8 },
  marcaProduto: { color: cores.suave, fontSize: 12, marginTop: 4 },
  resumo: { color: cores.texto, textAlign: "center", marginTop: 10, lineHeight: 20 },

  insight: {
    backgroundColor: cores.cartao,
    borderRadius: 16,
    padding: 14,
    borderLeftWidth: 4,
    marginBottom: 10
  },
  insightTitulo: { color: cores.texto, fontWeight: "700", marginBottom: 4 },
  insightTexto: { color: cores.suave, fontSize: 13, lineHeight: 19 },

  alternativa: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.cartao,
    borderColor: cores.borda,
    borderWidth: 1,
    borderRadius: 14,
    minHeight: 48,
    paddingHorizontal: 12,
    marginBottom: 8,
    gap: 10
  },
  alternativaIcone: {
    color: cores.verde,
    fontWeight: "900",
    fontSize: 16
  },
  alternativaTexto: { color: cores.texto, flex: 1, fontSize: 13, fontWeight: "700" },

  nutriLinha: { marginBottom: 12 },
  nutriTopo: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  nutriTexto: { color: cores.texto, fontSize: 13 },
  trilha: { height: 8, borderRadius: 999, backgroundColor: cores.fundoEmoji, overflow: "hidden" },
  preenchimento: { height: 8, borderRadius: 999 },

  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 8 },
  tag: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999, borderWidth: 1 },
  tagTexto: { fontSize: 12, fontWeight: "600" },

  nota: {
    backgroundColor: cores.fundoElevado,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 14,
    marginTop: 8,
    lineHeight: 19
  },
  notaTitulo: { color: cores.texto, fontSize: 13, fontWeight: "800", marginBottom: 4 },
  notaTexto: { color: cores.suave, fontSize: 13, lineHeight: 19 },

  botaoLista: {
    minHeight: 48,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: cores.destaque,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 8
  },
  botaoListaTexto: { color: cores.destaque, fontWeight: "900", fontSize: 13 },

  linhaAdd: { flexDirection: "row", gap: 10, marginBottom: 14 },
  input: {
    flex: 1,
    backgroundColor: cores.cartao,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: cores.borda,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: cores.texto
  },
  botaoMais: {
    width: 48,
    borderRadius: 14,
    backgroundColor: cores.destaque,
    alignItems: "center",
    justifyContent: "center"
  },

  check: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: cores.destaque,
    alignItems: "center",
    justifyContent: "center"
  },
  checkTexto: { color: cores.destaque, fontWeight: "800" },
  botaoRemover: { minWidth: 40, minHeight: 40, alignItems: "center", justifyContent: "center" },
  remover: { color: cores.suave, fontSize: 18 },

  voltar: { color: cores.destaque, fontWeight: "700", marginBottom: 12 },

  abas: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: cores.borda,
    backgroundColor: cores.fundoScanner,
    paddingTop: 8,
    paddingBottom: 18
  },
  aba: { flex: 1, alignItems: "center", gap: 2 },
  abaEmoji: { fontSize: 18, color: cores.suave, height: 20 },
  abaTexto: { fontSize: 10, color: cores.suave },
  abaTextoAtiva: { color: cores.destaque, fontWeight: "700" },
  botaoTema: {
    width: 58,
    height: 38,
    borderRadius: 19,
    backgroundColor: cores.cartao,
    borderWidth: 1,
    borderColor: cores.borda,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  botaoTemaTexto: { color: cores.texto, fontSize: 11, fontWeight: "700" }
  });
}

export function aplicarTema(modoEscuro) {
  cores = modoEscuro ? temas.escuro : temas.claro;
  tons = { bom: cores.verde, atencao: cores.amarelo, evitar: cores.vermelho };
  estilos = criarEstilos(cores);
}

export var estilos = criarEstilos(cores);
export default estilos;
