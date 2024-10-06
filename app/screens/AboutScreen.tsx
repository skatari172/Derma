import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/GlobalStyles';

const AboutScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('Home' as never)}>
        <Icon name="arrow-back" size={30} style={styles.iconColor} /> 
      </TouchableOpacity>
      <Text style={styles.title}>About Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    position: 'absolute',
    top: 60,
    left: '50%',
    transform: [{ translateX: -50 }],
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.title,
  },
  smallText: {
    marginTop: 20,
    textAlign: 'center',
  },
  iconColor: {
    color: '#ffffff',
  },
});

export default AboutScreen;