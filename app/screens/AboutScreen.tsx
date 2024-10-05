import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text>This application helps users analyze images using AI technology.</Text>
      <Text>Version: 1.0.0</Text>
      <Text>Developed during KnightHacks 2024 Hackathon.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AboutScreen;
