import React, { useState, useEffect } from 'react'; // Added useEffect
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/GlobalStyles';
import { getCapturedPhotoUri } from '../components/CameraCapture'; // Import the function to get the photo URI

const HomeScreen = () => {
  const navigation = useNavigation();
  const [photoUri, setPhotoUri] = useState(null);

  // Fetch the photo URI when the component mounts (or when the screen is navigated to)
  useEffect(() => {
    const fetchPhotoUri = async () => {
      const uri = getCapturedPhotoUri();
      setPhotoUri(uri);
    };

    fetchPhotoUri();
  }, []);

  return (
    <View style={styles.container}>
      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Login')}>
        <Icon name="log-out" size={30} color="#FFFFFF" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Welcome to the Home Page!</Text>


      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Icon name="information-circle" size={30} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
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
    marginBottom: 20,
  },
  photo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  placeholderText: {
    color: '#FFFFFF',
    marginBottom: 20,
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
