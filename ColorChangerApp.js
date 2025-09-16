import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp({ setBgColor }) {
  return (
    <View style={styles.container}>
      <Button title="Default (White)" onPress={() => setBgColor('white')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});