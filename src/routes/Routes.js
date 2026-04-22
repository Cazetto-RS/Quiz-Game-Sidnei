import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/screensGame/GameScreen';
import GameScreen2 from '../screens/screensGame/Gamescreen2';
import GameScreen3 from '../screens/screensGame/Gamescreen3';
import GameScreen4 from '../screens/screensGame/Gamescreen4';
import GameScreen5 from '../screens/screensGame/Gamescreen5';
import GameScreen6 from '../screens/screensGame/Gamescreen6';
import GameScreen7 from '../screens/screensGame/Gamescreen7';
import GameScreen8 from '../screens/screensGame/Gamescreen8';
import GameScreen9 from '../screens/screensGame/Gamescreen9';
import GameScreen10 from '../screens/screensGame/Gamescreen10';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Game2" component={GameScreen2} />
        <Stack.Screen name="Game3" component={GameScreen3} />
        <Stack.Screen name="Game4" component={GameScreen4} />
        <Stack.Screen name="Game5" component={GameScreen5} />
        <Stack.Screen name="Game6" component={GameScreen6} />
        <Stack.Screen name="Game7" component={GameScreen7} />
        <Stack.Screen name="Game8" component={GameScreen8} />
        <Stack.Screen name="Game9" component={GameScreen9} />
        <Stack.Screen name="Game10" component={GameScreen10} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}