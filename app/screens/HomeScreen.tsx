import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/GlobalStyles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Login' as never)}>
        <Icon name="log-out" size={30} color="#FFFFFF" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
      
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Icon name="information-circle" size={30} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
          <Icon name="camera" size={30} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
          <Icon name="images" size={30} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C3C3C',
  },
  signOutButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.title,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#3C3C3C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeScreen;