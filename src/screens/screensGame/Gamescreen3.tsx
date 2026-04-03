import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/GameStyle';

export default function GameScreen3({ route, navigation }:any) {
  const { nome, pontos } = route.params;

  const responder = (correta:boolean) => {
    let novosPontos = pontos;
    if (correta){
        novosPontos += 10;
        console.log('Resposta correta! Pontos:', novosPontos);
    }
    
    navigation.navigate('Game4', { nome, pontos: novosPontos });
  };

  return (
    <View style={styles.container}>
      {/* Título mantido como na Home */}
      <Text style={styles.title}>LEVEL 03</Text>

      {/* Caixa do Arcade envolvendo a pergunta e respostas */}
      <View style={styles.divArcade}>
        <Text style={styles.question}>O código deu um erro, o que vc faz?</Text>

        {["Procuro na internet", "Analisar o código", "3 socão no PC"].map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => responder(opcao === "3 socão no PC")}
          >
            <Text style={styles.cardText}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

