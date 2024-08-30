import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
