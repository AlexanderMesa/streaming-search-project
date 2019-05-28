import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAmSdlTjy1sN3vDXvvQSSfw8rpg8LAo2-Q",
  authDomain: "streaming-search-project.firebaseapp.com",
  databaseURL: "https://streaming-search-project.firebaseio.com",
  projectId: "streaming-search-project",
  storageBucket: "streaming-search-project.appspot.com",
  messagingSenderId: "675975515326"
  //appId: "1:675975515326:web:5ed4642f12c62c4c"
};

firebase.initializeApp(config);

export default firebase.auth();
