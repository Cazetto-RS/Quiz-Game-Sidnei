import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/GameStyle';

export default function GameScreen5({ route, navigation }:any) {
  const { nome, pontos } = route.params;

  const responder = (correta:boolean) => {
    let novosPontos = pontos;
    if (correta){
        novosPontos += 10;
        console.log('Resposta correta! Pontos:', novosPontos);
    }
    
    navigation.navigate('Game6', { nome, pontos: novosPontos });
  };

  return (
    <View style={styles.container}>
      {/* Título mantido como na Home */}
      <Text style={styles.title}>LEVEL 05</Text>

      {/* Caixa do Arcade envolvendo a pergunta e respostas */}
      <View style={styles.divArcade}>
        <Text style={styles.question}>Você goste cuscuz paulista?</Text>

        {["Sim (anti-cristo)", "Não", "Odeio quem gosta"].map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => responder(opcao === "Odeio quem gosta")}
          >
            <Text style={styles.cardText}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

