import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMg-q6ONO3QPDEd2lFmWnVnadt7uDG4DY",
    authDomain: "catch-of-the-day-ragith.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ragith.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;