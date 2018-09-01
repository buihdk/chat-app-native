import firebase from './utils/firebase';

export const loadMessages = () => (dispatch) => {
  dispatch(startLoadMessages());

  firebase.database().ref('messages').once('value', (snapshot) => {
    const data = snapshot.val();
    const formattedData = Object.keys(data).map(key => ({ key, ...data[key] }));
    dispatch(finishLoadMessages(formattedData));
  });

  firebase.database().ref('messages').on('child_added', (snapshot) => {
    const message = { key: snapshot.key, ...snapshot.val() };
    dispatch(receiveMessage(message));
  });
};

export const startLoadMessages = () => ({
  type: 'START_LOAD_MESSSAGES'
});

export const finishLoadMessages = (messages) => ({
  type: 'FINISH_LOAD_MESSAGES',
  messages
});

export const receiveMessage = (message) => ({
  type: 'RECEIVE_MESSAGE',
  message
});

export const sendMessage = (message) => (dispatch) => {
  // console.log(message);
  firebase.database().ref('messages').push(message);
  dispatch(setCurrentMessage(''));
};

export const setCurrentMessage = (message) => ({
  type: 'SET_CURRENT_MESSAGE',
  message
});