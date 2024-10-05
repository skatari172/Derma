import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GalleryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery Screen</Text>
      <Text>This is where your gallery content will be displayed.</Text>
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

export default GalleryScreen;
