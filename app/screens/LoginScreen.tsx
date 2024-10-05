import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home' as never); //Double check this paramter!
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoginScreen;
