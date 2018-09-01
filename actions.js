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

export const fetchFakeUsers = () => (dispatch) => {
  dispatch(startFetchUsers());
  // let data = await(await fetch('https://randomuser.me/api/?seed=1&page=1&results=20')).json();
  fetch('https://randomuser.me/api/?seed=1&page=1&results=20')
    .then(response => response.json())
    .then(json => dispatch(finishFetchUsers(json.results)));
};

export const startFetchUsers = () => ({
  type: 'START_FETCHING_USERS'
});

export const finishFetchUsers = (users) => ({
  type: 'FINISH_FETCHING_USERS',
  users
});