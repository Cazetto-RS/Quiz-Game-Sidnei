import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01011f", // Preto total de tela de tubo
  },

  title: {
    fontSize: 38,
    color: "#ffd900", // Amarelo clássico Arcade
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    // Efeito de "escada" ou sombra dura (comum em jogos 2D)
    textShadowColor: "#b60000",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 1,
    fontFamily: "MinhaFontePixel",
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 15,
    color: "#ebebeb",
    textAlign: "center",
    marginBottom: 40,
    width: "100%",
    fontFamily: "MinhaFontePixel",
  },

  input: {
    width: "85%",
    backgroundColor: "#111",
    padding: 15,
    borderWidth: 4, // Borda grossa para parecer pixel
    borderColor: "#555",
    color: "#ebebeb", // Texto verde "computador antigo"
    marginBottom: 35,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "MinhaFontePixel",
  },

  button: {
    width: "70%",
    backgroundColor: "#ffd900", // Amarelo "Insert Coin"
    padding: 15,
    borderBottomWidth: 6, // Sombra na parte de baixo para parecer botão físico
    borderBottomColor: "#b60000",
    borderRightWidth: 4,
    borderRightColor: "#b60000",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#b60000",
    fontSize: 22,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontFamily: "MinhaFontePixel",
  },

  divArcade: {
    width: 350, // Largura fixa em pixels (bom para quase todo celular)
    height: 320, // Altura fixa para não mudar entre perguntas/resultados
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center", // Garante que o conteúdo fique sempre no meio
    padding: 20,
    borderWidth: 4,
    borderColor: "#555",
    // Sombra opcional para dar profundidade ao "gabinete"
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    elevation: 10,
  },
});

export default styles;
