import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRjwxmE9vcB73YFnTyeHh7gUlmlG0jPwM',
  authDomain: 'real-time-chat-app-6a956.firebaseapp.com',
  databaseURL: 'https://real-time-chat-app-6a956.firebaseio.com',
  projectId: 'real-time-chat-app-6a956',
  storageBucket: 'real-time-chat-app-6a956.appspot.com',
  messagingSenderId: '351185927353'
};

firebase.initializeApp(config);

export default firebase;