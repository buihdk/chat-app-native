const initialState = {
  messages: {
    messageId: 2,
    messages: [],
    isLoading: false,
    isTyping: false,
    currentMessage: '',
  },
  users: {
    users: [],
    firstLoad: true,
    isLoading: false,
    isRefreshing: false,
    page: 1,
    seed: 1,
    error: null,
  },
  loginInfo: {
    currentUser: 'Khoa'
  }
};

export const messages = (state = initialState.messages, action) => {
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
  case 'SET_CURRENT_MESSAGE': {
    return {
      ...state,
      currentMessage: action.message
    };
  }
  default:
    return state;
  }
};

export const users = (state = initialState.users, action) => {
  switch(action.type) {
  case 'START_FETCHING_USERS': {
    return {
      ...state,
      isLoading: true
    };
  }
  case 'FINISH_FETCHING_USERS': {
    return {
      ...state,
      isLoading: false,
      users: action.users
    };
  }
  default:
    return state;
  }
};

export const loginInfo = (state = initialState.loginInfo, action) => state;