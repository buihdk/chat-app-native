import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ListExample from './List';
import LoginScreen from './components/LoginScreen';
import TabNav from './components/BottomTabNavigator';

const reducer = (state = ['homework','exercise'], action) => state

const store = createStore(reducer);

export default class App extends React.Component {
  state = {
    isLoggedIn: false
  }
  render() {
    console.log('ji')
    return (
      <Provider store={store}>
        { this.state.isLoggedIn ? 
          <TabNav screenProps={{
            // onLogoutPress: this.setState({isLoggedIn: false})
           }} />
          //<ListExample onLogoutPress={() => this.setState({isLoggedIn: false})} />
          : <LoginScreen onLoginPress={() => this.setState({isLoggedIn: true})} />
        }
            
      </Provider>
    );
  }
}