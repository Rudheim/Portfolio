import firebase from 'firebase/app';
import 'firebase/firestore'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBXbbZefFNiuwiSSR7NhUbCCFf8JLOas3M",
  authDomain: "netdotheim.firebaseapp.com",
  databaseURL: "https://netdotheim.firebaseio.com",
  projectId: "netdotheim",
  storageBucket: "netdotheim.appspot.com",
  messagingSenderId: "581492530472",
  appId: "1:581492530472:web:541681959609ed6d7cc41d"
});