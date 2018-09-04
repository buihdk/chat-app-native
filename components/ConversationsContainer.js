import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

// class ConversationsScreen extends React.Component {
const ConversationsScreen = (props) => {
  // constructor(props) {
  //   super(props);
  // }
  return (
    <View style={styles.container}>
      <Text>ConversationsScreen</Text>
    </View>
  );
};

ConversationsScreen.propTypes = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default ConversationsScreen;