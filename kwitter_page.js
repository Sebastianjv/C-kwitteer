// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx7E_JUfwCZgBHL_cS-vJAAqyG3PHp6G8",
  authDomain: "kwitter-68f2e.firebaseapp.com",
  databaseURL: "https://kwitter-68f2e-default-rtdb.firebaseio.com",
  projectId: "kwitter-68f2e",
  storageBucket: "kwitter-68f2e.appspot.com",
  messagingSenderId: "736081300224",
  appId: "1:736081300224:web:f7c09dc92d9fac256741e5"
};



  // Initialize Firebase
  user_name = localStorage.getItem("user_name");
  room_name = document.getElementById("room_name").value;

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:name_user,
         message:msg,
         like:0

      });
      document.getElementById("msg").value ="";
  }

  const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código

//Termina código
      } });  }); }
getData();
