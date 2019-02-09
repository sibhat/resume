import firebase from "firebase";

var config = {
	apiKey: "AIzaSyCFT05v14dKf5Jr9yWr_2E1RTZZjWXMBJo",
	authDomain: "sibhat-resume.firebaseapp.com",
	databaseURL: "https://sibhat-resume.firebaseio.com",
	projectId: "sibhat-resume",
	storageBucket: "sibhat-resume.appspot.com",
	messagingSenderId: "1092295778353"
};
firebase.initializeApp(config);
export default firebase;
