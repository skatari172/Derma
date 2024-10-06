// app/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/GlobalStyles';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')}

        style={styles.logo}
      />
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: colors.title,
  },
  input: {
    height: 50,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: colors.inputBackground,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.button,
    borderRadius: 8,
    paddingVertical: 20,

    paddingHorizontal: 20,
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: colors.text,

    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 15,
    color: colors.title,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;