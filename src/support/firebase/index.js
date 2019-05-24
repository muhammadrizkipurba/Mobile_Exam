import Firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDf9aKH_9P_bEiVMWTQhpY3uYsM91PnU-E",
  authDomain: "exam-mobile-76d92.firebaseapp.com",
  databaseURL: "https://exam-mobile-76d92.firebaseio.com",
  projectId: "exam-mobile-76d92",
  storageBucket: "exam-mobile-76d92.appspot.com",
  messagingSenderId: "638708033124",
  appId: "1:638708033124:web:5ffeab245a5ac0a7"
  };

export const Fire=Firebase.initializeApp(firebaseConfig);