import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAhJEeYFa8sx3GdHRRBBNURVTOOgJZ4zS8",
  authDomain: "reactnative-4c1da.firebaseapp.com",
  databaseURL: "https://reactnative-4c1da.firebaseio.com",
  projectId: "reactnative-4c1da",
  storageBucket: "reactnative-4c1da.appspot.com",
  messagingSenderId: "885253949579",
  appId: "1:885253949579:web:3d3f502837318795"
};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);