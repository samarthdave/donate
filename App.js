import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/img/hand-image.jpg')} />
      <Text style={styles.headerStyle}>donate</Text>
      
      <Text style={styles.subtitleStyle}>A tangible solution to reduce food waste.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    color: '#444',
    fontSize: 40,
  },
  subtitleStyle: {
    color: '#333',
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
