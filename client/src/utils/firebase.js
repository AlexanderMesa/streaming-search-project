import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCaarLYFJU90SSt13ajCQ2wzlJgdF36u7I",
  authDomain: "streaming-search-cfc13.firebaseapp.com",
  databaseURL: "https://streaming-search-cfc13.firebaseio.com",
  projectId: "streaming-search-cfc13",
  storageBucket: "streaming-search-cfc13.appspot.com",
  messagingSenderId: "1080536984608"
  //appId: "1:675975515326:web:5ed4642f12c62c4c"
  /*
  apiKey: "AIzaSyAmSdlTjy1sN3vDXvvQSSfw8rpg8LAo2-Q",
  authDomain: "streaming-search-project.firebaseapp.com",
  databaseURL: "https://streaming-search-project.firebaseio.com",
  projectId: "streaming-search-project",
  storageBucket: "streaming-search-project.appspot.com",
  messagingSenderId: "675975515326"
  */
};

firebase.initializeApp(config);

export default firebase.auth();
