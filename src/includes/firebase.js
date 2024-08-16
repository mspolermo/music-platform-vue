import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBnAUBbnSmBfIZ65XFqmIB8UJiL9dfaB5k',
  authDomain: 'music-8f3c5.firebaseapp.com',
  projectId: 'music-8f3c5',
  storageBucket: 'music-8f3c5.appspot.com',
  appId: '1:326461175146:web:c13953ef34ce6e0e572113'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
