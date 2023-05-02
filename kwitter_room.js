const firebaseConfig = {
    apiKey: "AIzaSyDoxGvq5OHCTxkzNmt_2lmnfiO7It6x2rg",
    authDomain: "kwitter-a4b13.firebaseapp.com",
    databaseURL: "https://kwitter-a4b13-default-rtdb.firebaseio.com",
    projectId: "kwitter-a4b13",
    storageBucket: "kwitter-a4b13.appspot.com",
    messagingSenderId: "497154023919",
    appId: "1:497154023919:web:8af95ccffc3eb1da84961a"
  };
  
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  getData();
  user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
   
   function addRoom() {
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({

    purpose : "adding room name"
 });
 localStorage.setItem("roomName",room_name);
window.location = "kwitter_page.html";

   }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
 console.log(Room_names);
 row = "<div class ='room_name' id = " + Room_names + " onclick = 'ReDirectToRoomName(this.id)'>#" + Room_names +  "</div> <hr>" ;
 document.getElementById("output").innerHTML += row;
   //End code
   });});}
   function ReDirectToRoomName(room_name){
console.log(room_name);
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html"
   };

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("roomName");
window.location = "index.html";


}
