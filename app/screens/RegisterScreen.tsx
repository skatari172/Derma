// app/screens/RegisterScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/GlobalStyles';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Please make sure both passwords are the same.");
      return;
    }
    // Proceed with registration logic (e.g., API call)
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor={colors.placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
        <Text style={styles.loginText}>Already have an account? Log in here</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 25,
    color: colors.title,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;