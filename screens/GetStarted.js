import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';

const GetStarted = ({ navigation }) => {
  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
        source={require('./Assets/gradient-image.png')}
        style={styles.backgroundImage}
      >
      <View style={styles.logoContainer}>
        <Image
          source={require('./Assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./Assets/hero.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>

      {/* Text and Button Section */}
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome to Ezypay</Text>
        <Text style={styles.paragraph}>
          Manage your finances effortlessly, track expenses, and invest smarter 
          with our AI-powered financial assistant.
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        paddingHorizontal: 30,
      },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
   
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 80,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    zIndex: 5,
  },
  textContainer: {
    flex: 1.5,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#4a4a4a',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#00acee',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign : 'center',
  },
});

export default GetStarted;