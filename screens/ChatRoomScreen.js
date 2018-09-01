import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { loadMessages , sendMessage, setCurrentMessage } from '../actions';
import { GiftedChat } from 'react-native-gifted-chat';
import PropTypes from 'prop-types';

class ChatRoomScreen extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }
  renderLoading = () => <ActivityIndicator size='large' style={{marginTop: '50%'}}/>;

  render() {
    return (
      <GiftedChat
        messages={this.props.messages}
        onSend={(text) => {
          this.props.sendMessage(text[0]);
        }}
        user={{
          _id: 3,
          avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
          name: this.props.currentUser,
        }}
        alwaysShowSend={true}
        showUserAvatar={true}
        inverted={false}
        renderLoading={this.renderLoading}
      />
    );
  }
}

ChatRoomScreen.propTypes = {
  loadMessages: PropTypes.func.isRequired, 
  sendMessage: PropTypes.func.isRequired, 
  isLoading: PropTypes.bool.isRequired, 
  messages: PropTypes.array.isRequired, 
  currentUser: PropTypes.string.isRequired, 
};

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  isLoading: state.messages.isLoading,
  currentMessage: state.messages.currentMessage,
  messageId: state.messages.messageId,
  currentUser: state.loginInfo.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(loadMessages()),
  sendMessage: (message) => dispatch(sendMessage(message)),
  setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomScreen);