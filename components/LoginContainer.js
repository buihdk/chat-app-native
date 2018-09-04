import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import PropTypes from 'prop-types';

class LoginContainer extends React.Component {
  
  async login() {
    // const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    //   '260973314745050',
    //   { permissions: ['public_profile']}
    // );
    // if (type === 'success') {
    //   // Get the user's name using Facebook's Graph API
    //   const response = await fetch(
    //     `https://graph.facebook.com/me?access_token=${token}`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    //   // Fire a redux action like: USER_LOGGED_IN
    //   // Build Firebase credential with the Facebook access token.
    //   // const credential = firebase.auth.FacebookAuthProvider.credential(token);

    //   // // Sign in with credential from the Facebook user.
    //   // firebase.auth().signInWithCredential(credential)
    //   //   .catch(error => {
    //   //     // Handle Errors here.
    //   //   });
    //   this.props.navigation.navigate('App');
    // }
    this.props.navigation.navigate('App');
  }
  render() {
    
    return (
      <LoginScreen 
        login={this.login.bind(this)}
      />
    );
  };
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default LoginContainer;