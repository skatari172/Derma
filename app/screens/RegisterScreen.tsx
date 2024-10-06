import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'; // Import axios to make API calls

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setusername] = useState<string>('');  // username state
  const [password, setPassword] = useState<string>('');  // Password state
  const [confirmPassword, setConfirmPassword] = useState<string>('');  // Confirm password state
  const [showPassword, setShowPassword] = useState<boolean>(false);  // Password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);  // Confirm password visibility toggle

  // Form validation and registration logic
  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
  
    try {
      // Send registration data to the correct backend route (/register)
      const response = await axios.post('http://127.0.0.1:6000/register', { // <-- update to /register
        username,
        password
      });
  
      Alert.alert('Success', 'Registration successful! You can now log in.');
      navigation.navigate('Login' as never); // Navigate to the login screen
    } catch (error: any) {
      console.error('Registration error:', error.response?.data || error.message);
      Alert.alert('Error', 'An error occurred during registration. Please try again.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setusername}
        placeholderTextColor={colors.placeholder}
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    marginLeft: -40,
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
