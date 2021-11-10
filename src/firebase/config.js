// import firebase from 'firestore/app'
// import 'firebase/firestore'
// import 'firestore/auth'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDMpMdaROIZB0VD1pQARF7PWbB-vZqw_Lk",
    authDomain: "list-pro-e206d.firebaseapp.com",
    projectId: "list-pro-e206d",
    storageBucket: "list-pro-e206d.appspot.com",
    messagingSenderId: "19317884946",
    appId: "1:19317884946:web:eda1e4702c409c5fa270cb"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize server
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamps

const timestamp = firebase.firestore.FieldValue.serverTimestamp
// const timestamp = firebase.firestore.FieldVaule.serverTimestamp

export {projectAuth, projectFirestore, timestamp, projectStorage}