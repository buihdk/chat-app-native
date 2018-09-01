import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { messages, loginInfo } from './reducers';
import LoginScreen from './screens/LoginScreen';
import TabNav from './components/BottomTabNavigator';

const reducers = combineReducers({
  messages,
  loginInfo
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default class App extends React.Component {
  state = {
    isLoggedIn: false
  }
  onLogoutPress() {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <Provider store={store}>
        { this.state.isLoggedIn ? 
          <TabNav screenProps={{
            onLogoutPress: this.onLogoutPress.bind(this)
          }} />
          //<ListExample onLogoutPress={() => this.setState({isLoggedIn: false})} />
          : <LoginScreen onLoginPress={() => this.setState({isLoggedIn: true})} />
        }
            
      </Provider>
    );
  }
}