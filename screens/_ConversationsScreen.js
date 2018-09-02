import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';

class ConversationsScreen extends React.Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <View>
        <Dropdown
          label='Favorite Fruit'
          data={data}
          dropdownOffset={{ top: 150, left: 0 }}
        />
      </View>
      
    );
  }
}

export default ConversationsScreen;
