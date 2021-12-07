import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Логбук погружений</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000983',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 5,
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgb(255, 255, 255)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  }
});
