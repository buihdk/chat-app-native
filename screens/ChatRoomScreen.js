import React from 'react';
import { ActivityIndicator } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import PropTypes from 'prop-types';

const ChatRoomScreen = (props) => {
  
  if (props.messages.length < 1 || props.messages == undefined)
    return <ActivityIndicator size='large' style={{marginTop: '50%'}}/>;
  
  return (
    <GiftedChat
      messages={props.messages}
      onSend={(text) => {
        props.sendMessage(text[0]);
      }}
      user={{
        _id: 3,
        avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
        name: props.currentUser,
      }}
      alwaysShowSend={true}
      showUserAvatar={true}
      inverted={false}
    />
  );
};

ChatRoomScreen.propTypes = {
  messages: PropTypes.array.isRequired, 
  currentUser: PropTypes.string.isRequired, 
  sendMessage: PropTypes.func.isRequired, 
};

export default ChatRoomScreen;