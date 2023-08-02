
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
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Bienvenido" +user_name +"!";



      function addRoom(){
            room_name = document.getElementById("room_name" ,room_name);
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("room name "+ Room_names);
      row="<div class='room_name' id= "+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //Final del código
      });});}
getData();

function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
      });
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
