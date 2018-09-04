import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" style={styles.logo} source={require('../assets/instaChat.png')} />
        <Text style={styles.logoText}>instaChat</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.login}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c3e50'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    position: 'relative',
    width: 300,
    height: 100
  },
  logoText:{
    color: '#ffe500',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700'
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15,
    marginBottom: 20
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  }
});

export default LoginScreen;