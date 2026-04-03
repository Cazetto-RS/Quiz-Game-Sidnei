import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01011f", // Mesmo fundo das outras telas
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "#ffd900",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "#b60000",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 1,
    fontFamily: "MinhaFontePixel",
    marginBottom: 30,
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
  name: {
    fontSize: 18,
    color: "#ebebeb",
    fontFamily: "MinhaFontePixel",
    marginBottom: 20,
    textTransform: "uppercase",
  },
  score: {
    fontSize: 45,
    color: "#ffd900", // Pontuação em destaque (amarelo)
    fontWeight: "bold",
    fontFamily: "MinhaFontePixel",
    textShadowColor: "#b60000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
  },
  button: {
    width: "80%",
    backgroundColor: "#ffd900",
    padding: 15,
    borderBottomWidth: 6,
    borderBottomColor: "#b60000",
    borderRightWidth: 4,
    borderRightColor: "#b60000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#b60000",
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "MinhaFontePixel",
    textTransform: "uppercase",
  },
});

export default styles;
