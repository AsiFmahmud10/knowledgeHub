import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCFCcS1HmkABWvwSVaLz22W0wYJ_6sbZP4",
    authDomain: "knowledge-hub-e8f8f.firebaseapp.com",
    projectId: "knowledge-hub-e8f8f",
    storageBucket: "knowledge-hub-e8f8f.appspot.com",
    messagingSenderId: "377857340748",
    appId: "1:377857340748:web:348a63dbe753ea97e34be9"
  };


  //firebase init

firebase.initializeApp(firebaseConfig)

 //init service

const db = firebase.firestore()
const AuthRef = firebase.auth()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp
const storage = firebase.storage()
export {
  db, AuthRef,timeStamp, storage
}