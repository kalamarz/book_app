import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const firebaseConfig = {
    apiKey: "AIzaSyBtNIDS7vgxDkT-WKB1BEhaaJ9-CpLz0_A",
    authDomain: "books-app-9838f.firebaseapp.com",
    databaseURL: "https://books-app-9838f.firebaseio.com",
    projectId: "books-app-9838f",
    storageBucket: "books-app-9838f.appspot.com",
    messagingSenderId: "839369671010"
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true  
}

firebase.initializeApp(firebaseConfig)

//const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
  reduxFirestore(firebase) 
)(createStore);


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer 
});


const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState, composeWithDevTools(
    reactReduxFirebase(firebase)
));

export default store;