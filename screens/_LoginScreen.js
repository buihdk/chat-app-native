import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.loginContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/instaChat.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email or Mobile Num"
          placeholderTextColor="rgba(225,225,225,0.7)" />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.onLoginPress}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.propTypes = {
  onLoginPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c3e50'
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  }, 
  input:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});

export default LoginScreen;