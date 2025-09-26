import ColorChangerApp from '../PaulActivity/ColorChangerApp';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';


export default function App() {
  

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <CounterApp/>
      <ColorChangerApp />

      
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