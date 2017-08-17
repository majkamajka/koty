import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBD5bKLZyfDUTHWSQrMdOU6Z6tsreYaak4',
  authDomain: 'koty-c79fd.firebaseapp.com',
  databaseURL: 'https://koty-c79fd.firebaseio.com',
  projectId: 'koty-c79fd',
  storageBucket: 'koty-c79fd.appspot.com',
  messagingSenderId: '511321533732',
};

const fb = firebase.initializeApp(config);


export default fb;
