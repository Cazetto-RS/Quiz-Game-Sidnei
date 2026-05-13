import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/ResultStyle';

export default function RankingScreen({ navigation }: any) {
  const [ranking, setRanking] = useState<any[]>([]);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await AsyncStorage.getItem('@ranking');
        if (data) setRanking(JSON.parse(data));
      } catch (e) {}
    }
    carregar();
  }, []);

  const medalhas = ['🥇', '🥈', '🥉'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RANKING</Text>

      <View style={[styles.divArcade, { width: '90%' }]}>
        {ranking.length === 0 ? (
          <Text style={styles.name}>NENHUMA PARTIDA AINDA</Text>
        ) : (
          <FlatList
            data={ranking}
            keyExtractor={(_, i) => String(i)}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 }}>
                <Text style={styles.name}>{medalhas[index] ?? `#${index + 1}`}  {item.nome}</Text>
                <Text style={styles.name}>{item.pontos} PTS</Text>
              </View>
            )}
          />
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
