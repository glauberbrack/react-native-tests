import React, { useState } from 'react';
import axios from 'axios';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const User = () => {
  const [name, setName] = useState<string>('');

  const getUser = async () => {
    const response = await axios('https://api.github.com/users/glauberbrack');
    const data = await response.data;
    setName(data.name);
  };

  const onButton = async () => await getUser();

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.headline}>{name}</Text>
      <TouchableOpacity onPress={onButton} style={styles.button}>
        <Text style={styles.buttonText}>Get username</Text>
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

export default User;
