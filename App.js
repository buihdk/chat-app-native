import React from 'react';
import { Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ListExample from './List';

const reducer = (state = ['homework','exercise'], action) => state

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ListExample />
      </Provider>
    );
  }
}