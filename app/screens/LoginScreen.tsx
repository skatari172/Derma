// app/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/GlobalStyles';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Derma!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={colors.placeholder}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={colors.placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home' as never)}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: colors.title,
  },
  input: {
    height: 50,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 25,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: colors.inputBackground,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.button,
    borderRadius: 8,
    paddingVertical: 20, // Increased vertical padding for a larger button
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: colors.text,
    fontSize: 20, // Increased font size for better visibility
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 25,
    color: colors.title,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;