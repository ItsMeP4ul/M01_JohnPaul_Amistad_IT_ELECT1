import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import CommentSection from './CommentSection';
import ChatBubble from './ChatBubble';


export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
     
      <CommentSection/>
      <ChatBubble/>
      
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