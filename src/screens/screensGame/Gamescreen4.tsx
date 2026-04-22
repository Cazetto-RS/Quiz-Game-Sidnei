import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/GameStyle';

export default function GameScreen4({ route, navigation }:any) {
  const { nome, pontos } = route.params;

  const responder = (correta:boolean) => {
    let novosPontos = pontos;
    if (correta){
        novosPontos += 10;
        console.log('Resposta correta! Pontos:', novosPontos);
    }
    
    navigation.navigate('Game5', { nome, pontos: novosPontos });
  };

  return (
    <View style={styles.container}>
      {/* Título mantido como na Home */}
      <Text style={styles.title}>LEVEL 04</Text>

      {/* Caixa do Arcade envolvendo a pergunta e respostas */}
      <View style={styles.divArcade}>
        <Text style={styles.question}>O PC quebrou e agora?</Text>

        {["Culpar o estagiário", "Enterrar o PC", "Enterrar o estagiário", "Arrumar"].map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => responder(opcao === "Enterrar o PC")}
          >
            <Text style={styles.cardText}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

