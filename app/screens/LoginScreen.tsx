import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { colors } from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for showing password

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Please input all fields");
      return;
    }
    // Proceed with login logic (e.g., API call)
    navigation.navigate('Home' as never);
  };

  // Clear input fields when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // Clear the input fields when the screen is focused
      setUsername('');
      setPassword('');
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Derma!</Text>
      <TextInput
        style={[styles.input, isFocusedUsername && styles.inputFocused]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={colors.placeholder}
        onFocus={() => setIsFocusedUsername(true)}
        onBlur={() => setIsFocusedUsername(false)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, isFocusedPassword && styles.inputFocused]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle password visibility
          placeholderTextColor={colors.placeholder}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? "eye-off" : "eye"} size={24} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
  inputFocused: {
    borderColor: colors.button, // Change border color on focus
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    marginLeft: -40, // Adjust position of the icon
    color: colors.text,
    marginBottom: 16, // Added marginBottom of 20
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