import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../style/HomeStyle';

export default function HomeScreen({ navigation }:any) {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUIZ GAME</Text>

      <View style={styles.divArcade}>
        <Text style={styles.subtitle}>Você tem o que é necessario para ganhar?</Text>

        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#ebebeb"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Game', { nome })}
        >
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

