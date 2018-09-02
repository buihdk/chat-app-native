import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export const ChatRoomIcon = ({ tintColor, focused }) => {
  return <Icon name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'} size={26} style={{ color: tintColor }} />;
}; 
ChatRoomIcon.propTypes = { tintColor: PropTypes.string.isRequired, focused: PropTypes.bool.isRequired, };

export const ConversationsIcon = ({ tintColor, focused }) => {
  return <Icon name={focused ? 'ios-text' : 'ios-text-outline'} size={26} style={{ color: tintColor }} />;
}; 
ConversationsIcon.propTypes = { tintColor: PropTypes.string.isRequired, focused: PropTypes.bool.isRequired, };

export const UsersIcon = ({ tintColor, focused }) => {
  return <Icon name={focused ? 'ios-people' : 'ios-people-outline'} size={26} style={{ color: tintColor }} />;
}; 
UsersIcon.propTypes = { tintColor: PropTypes.string.isRequired, focused: PropTypes.bool.isRequired, };

