import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.headline}>Sup!</Text>
      <TouchableOpacity
        onPress={() => console.warn('Hey, you!!')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Let's go!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    color: '#222128',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    height: 45,
    width: 140,
    backgroundColor: '#5346b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Home;
