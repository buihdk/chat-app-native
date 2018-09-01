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
      <Button onPress={props.screenProps.onLogoutPress} title="LOGOUT" />
    </View>
  );
};

ConversationsScreen.propTypes = {
  screenProps: PropTypes.shape({
    onLogoutPress: PropTypes.func.isRequired,
  }).isRequired,
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
