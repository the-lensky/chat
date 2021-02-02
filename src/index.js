import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: 'AIzaSyAhhlxyV24mxzTfy2qhZ8Qm-jaH6o3fyE4',
    authDomain: 'chat-8628c.firebaseapp.com',
    projectId: 'chat-8628c',
    storageBucket: 'chat-8628c.appspot.com',
    messagingSenderId: '668292333290',
    appId: '1:668292333290:web:7eff1c012a2fa13d1b2193'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
