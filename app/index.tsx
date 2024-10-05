import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Import your navigator

const App: React.FC = () => {
  return (
    <NavigationContainer independent = {true}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;