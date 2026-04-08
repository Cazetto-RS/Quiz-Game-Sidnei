import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/ResultStyle';

export default function ResultScreen({ route, navigation }: any) {
  // Pegando o nome e os pontos acumulados que vieram da Game2
  const { nome, pontos } = route.params;

  return (
    <View style={styles.container}>
      {/* Título de Fim de Jogo */}
      <Text style={styles.title}>GAME OVER</Text>

      {/* Caixa do Arcade com o Resultado */}
      <View style={styles.divArcade}>
        <Text style={styles.name}>JOGADOR: {nome}</Text>
        
        <Text style={styles.score}>{pontos} PTS</Text>
        
        <Text style={[styles.name, { marginTop: 20, fontSize: 12 }]}>
          {pontos === 60 ? "NÍVEL: PIKA DE MAIS" : pontos === 50 ? "NÍVEL: FOI TOP EIN?" : pontos === 40 ? "NÍVEL: FOI BOM, MAS ESPERAVA MAIS" : pontos === 30 ? "NÍVEL: BEM RUINZINHO EIN?" : pontos === 20 ? "NÍVEL: VAMO TENTAR PLMS?" : "NÍVEL: DESISTA DA SUA VIDA"}
        </Text>
      </View>

      {/* Botão para Reiniciar o Ciclo */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>TENTAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>
  );
}