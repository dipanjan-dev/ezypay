import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';



let userSchema = object({
    username: string().required("Username is required"),
    password: string().required("Password is required"),
  });
  
const SignIn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>   
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}>
        {/* Logo Header */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./Assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Formik
     initialValues={{ username: '' , password : ''}}
     onSubmit={values => console.log(values)}
     validationSchema={userSchema}
   >
     {({ handleChange, handleBlur, handleSubmit, values,errors }) => (
        <View style={styles.content}>
          <Text style={styles.header}>Welcome Back</Text>
          <Text style={styles.subHeader}>
            Secure access to your financial world
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#999"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
          </View>
          {errors.username && <Text style={{color : 'red'}}>{errors.username}</Text>}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </View>
            {errors.password && <Text style={{color : 'red'}}>{errors.password}</Text>}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSubmit}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={{textAlign : 'center', marginBottom : 10, fontWeight : 900, color : '#999'}}>Or</Text>
          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.buttonContent}>
              <Image
                source={require('./Assets/google.png')}
                style={styles.googleLogo}
              />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

        </View>
        )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  keyboardAvoid: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  logo: {
    width: 160,
    height: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F2F3F4',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  passwordToggle: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#00acee',
    fontSize: 14,
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: '#00acee',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  signUpText: {
    color: '#666',
  },
  signUpLink: {
    color: '#00acee',
    fontWeight: '500',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignIn;
