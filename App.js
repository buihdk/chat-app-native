import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { messages, users, loginInfo } from './utils/reducers';
import RootNavigation from './components/BottomTabNavigator';

const reducers = combineReducers({
  messages,
  users,
  loginInfo
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation screenProps={{ 

        }}/>
      </Provider>
    );
  }
}