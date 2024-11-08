import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cronometro from './Cronometro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cronometro />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
