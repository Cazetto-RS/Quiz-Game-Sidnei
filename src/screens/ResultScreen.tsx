import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/ResultStyle';

export default function ResultScreen({ route, navigation }: any) {
  const { nome, pontos } = route.params;

  useEffect(() => {
    async function salvarPontuacao() {
      try {
        const data = await AsyncStorage.getItem('@ranking');
        const ranking = data ? JSON.parse(data) : [];
        ranking.push({ nome, pontos, data: new Date().toLocaleDateString('pt-BR') });
        ranking.sort((a: any, b: any) => b.pontos - a.pontos);
        await AsyncStorage.setItem('@ranking', JSON.stringify(ranking.slice(0, 10)));
      } catch (e) {}
    }
    salvarPontuacao();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GAME OVER</Text>

      <View style={styles.divArcade}>
        <Text style={styles.name}>JOGADOR: {nome}</Text>

        <Text style={styles.score}>{pontos} PTS</Text>

        <Text style={[styles.name, { marginTop: 20, fontSize: 12 }]}>
          {pontos === 100 ? "REALLY PEST" : pontos >= 80 ? "NÍVEL: PIKA DE MAIS" : pontos >= 60 ? "NÍVEL: FOI TOP EIN?" : pontos >= 40 ? "NÍVEL: FOI BOM, MAS ESPERAVA MAIS" : pontos >= 20 ? "NÍVEL: BEM RUINZINHO EIN?" : "NÍVEL: DESISTA DA SUA VIDA"}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ranking')}>
        <Text style={styles.buttonText}>VER RANKING</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>TENTAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>
  );
}
