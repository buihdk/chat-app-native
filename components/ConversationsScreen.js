import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ConversationsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ConversationsScreen</Text>
      <Button onPress={props.onLogoutPress} title="LOGOUT" />
    </View>
  );
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
