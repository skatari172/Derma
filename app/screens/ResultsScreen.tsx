import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results Screen</Text>
      <Text>This is where the analysis results will be shown.</Text>
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

export default ResultsScreen;
