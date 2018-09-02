import React from 'react';
import { connect } from 'react-redux';
import { loadMessages , sendMessage, setCurrentMessage } from '../actions';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import PropTypes from 'prop-types';

class ChatRoom extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    return (
      <ChatRoomScreen 
        messages={this.props.messages}
        currentUser={this.props.currentUser}
        sendMessage={this.props.sendMessage}
      />
    );
  }
}

ChatRoom.propTypes = {
  loadMessages: PropTypes.func.isRequired, 
  sendMessage: PropTypes.func.isRequired, 
  setCurrentMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired, 
  currentUser: PropTypes.string.isRequired, 
};

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  currentMessage: state.messages.currentMessage,
  messageId: state.messages.messageId,
  currentUser: state.loginInfo.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(loadMessages()),
  sendMessage: (message) => dispatch(sendMessage(message)),
  setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);