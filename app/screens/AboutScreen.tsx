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
      <Text style={styles.title}>About Us</Text>
      
      <Text style={styles.header}>Our Mission</Text>
      <Text style={styles.bodyText}>
        We strive to raise awareness about skin cancer by providing an accessible tool for early detection. Our goal is to empower individuals to take proactive steps toward their health without any obligations.
      </Text>

      <Text style={styles.header}>How It Works</Text>
      <Text style={styles.bodyText}>
        Upload a clear, cropped image of a skin mark using our user-friendly interface. Our AI model will analyze the image and return a confidence assessment indicating whether the mark may be benign or malignant. Based on the result, we advise consulting a medical professional for further evaluation.
      </Text>

      <Text style={styles.header}>Important Notice</Text>
      <Text style={styles.bodyText}>
        Please be aware that our AI model does not guarantee accuracy and is not a substitute for professional medical advice. If you have concerns about your skin health, we strongly recommend seeking assistance from a qualified healthcare provider.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 60, 
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 34, 
    fontWeight: 'bold',
    marginBottom: 10, 
    color: colors.title,
  },
  header: {
    fontSize: 26, 
    fontWeight: 'bold',
    marginTop: 15, 
    marginBottom: 10,
    color: colors.title,
  },
  bodyText: {
    fontSize: 20,
    marginBottom: 15,
    color: colors.text,
  },
  iconColor: {
    color: '#ffffff',
  },
});

export default AboutScreen;