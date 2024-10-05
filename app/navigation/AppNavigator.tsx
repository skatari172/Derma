import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ResultsScreen from '../screens/ResultsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
