import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { loadMessages , sendMessage, setCurrentMessage } from '../utils/actions';
import AppSettingsDropDown from './AppSettingsDropDown';
import AppInfoModal from './AppInfoModal';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import PropTypes from 'prop-types';

class ChatRoomContainer extends React.Component {
  static navigationOptions = ({navigation}) => {  
    return {
      headerLeft: <AppSettingsDropDown navigate = {navigation.navigate}/>,
      headerTitle: <Text style={{color:'#3a5998', fontSize: 20, fontWeight: 'bold'}}>Chat Room</Text>,
      headerRight: <AppInfoModal />,
    };
  };
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

ChatRoomContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomContainer);