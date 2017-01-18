import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyB6ajOvLhvPNdH8SDjYhZhLd12Vg34UWP0",
	authDomain: "codebreaker-9931d.firebaseapp.com",
	databaseURL: "https://codebreaker-9931d.firebaseio.com",
	storageBucket: "codebreaker-9931d.appspot.com",
	messagingSenderId: "256723179730"
};

firebase.initializeApp(config);
//const database = firebase.database().ref('/codes');
const fbInstance = firebase;

export default fbInstance;