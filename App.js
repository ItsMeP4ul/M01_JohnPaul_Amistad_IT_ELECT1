import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';
import CommentSectionApp from './CommentSectionApp';
import ChatBotApp from './ChatBotApp';
import CombinationApp from './CombinationApp';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      
      <ColorChangerApp/>
      <CounterApp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});