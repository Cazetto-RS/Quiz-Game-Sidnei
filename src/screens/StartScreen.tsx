import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../style/StartStyle';

export default function HomeScreen({ navigation }:any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUIZ GAME</Text>

      <View style={styles.divArcade}>
        

      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>JOGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

