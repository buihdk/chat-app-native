const initialState = {
  messageId: 2,
  messages: [],
  isLoading: false,
  isTyping: false,
  currentMessage: '',
};

export const messages = (state = initialState, action) => {
  switch(action.type) {
  case 'START_LOAD_MESSAGES': {
    return {
      ...state,
      isLoading: true
    };
  }
  case 'FINISH_LOAD_MESSAGES': {
    return {
      ...state,
      isLoading: false,
      messages: action.messages
    };
  }
  case 'RECEIVE_MESSAGE': {
    //let newMessagesArray = state.messages.slice();
    //newMessagesArray.unshift(action.message);
    return {
      ...state,
      messages: state.messages.concat(action.message)
      //messages: newMessagesArray
    };
  }
  case 'SET_CURRENT_MESSAGE':
    return {
      ...state,
      currentMessage: action.message
    };
  default:
    return state;
  }
};

export const loginInfo = (state = { currentUser: 'Khoa' }, action) => state;