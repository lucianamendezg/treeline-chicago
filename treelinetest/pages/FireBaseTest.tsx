import Firebase from "react-native-firebase";
import React from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBBX1WcDW_FolT2Hj-QQ6JwhF7-_SNphrw",
    authDomain: "treeline-chicago.firebaseapp.com",
    databaseURL: "https://treeline-chicago.firebaseio.com",
    projectId: "treeline-chicago",
    storageBucket: "treeline-chicago.appspot.com",
    messagingSenderId: "785298228900",
    appId: "1:785298228900:web:bec4dc99f42a1bbf4d0831",
    measurementId: "G-DJ80LJ4R3J"
  };

let app = Firebase.initializeApp(firebaseConfig, "Treeline-Chicago");


class FirebaseTest extends React.Component{

    constructor(props){
        super(props);
        let db = app.database();
        db.ref('/items').push({
            name: "john"
        });
    }
}

export {FirebaseTest};