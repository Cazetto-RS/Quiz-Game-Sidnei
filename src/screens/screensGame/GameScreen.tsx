import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style/GameStyle";

export default function GameScreen({ route, navigation }: any) {
  const { nome } = route.params;
  const [pontos, setPontos] = useState(0);

  const responder = (correta: boolean) => {
    let novosPontos = pontos;
    if (correta) {
      novosPontos += 10;
    }
    // Passando o nome e os pontos acumulados para a próxima fase
    navigation.navigate("Game2", { nome, pontos: novosPontos });
  };

  return (
    <View style={styles.container}>
      {/* Título mantido como na Home */}
      <Text style={styles.title}>LEVEL 01</Text>

      {/* Caixa do Arcade envolvendo a pergunta e respostas */}
      <View style={styles.divArcade}>
        <Text style={styles.question}>O que falar se o código não funcionar?</Text>

        {["Na minha máquina funciona!", "Complicado né?", "FDS?"].map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => responder(opcao === "Na minha máquina funciona!")}
          >
            <Text style={styles.cardText}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}