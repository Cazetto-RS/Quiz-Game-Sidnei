import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01011f", // Mesmo fundo da Home
  },
  title: {
    fontSize: 28,
    color: "#ffd900",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "#b60000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    fontFamily: "MinhaFontePixel",
    marginBottom: 20,
    marginTop: 40,
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
  question: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "MinhaFontePixel",
    lineHeight: 25,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffd900",
    padding: 15,
    marginBottom: 15,
    borderBottomWidth: 4,
    borderBottomColor: "#b60000",
    borderRightWidth: 3,
    borderRightColor: "#b60000",
    alignItems: "center",
  },
  cardText: {
    color: "#b60000",
    fontSize: 14,
    fontFamily: "MinhaFontePixel",
    textTransform: "uppercase",
  },
});

export default styles;
