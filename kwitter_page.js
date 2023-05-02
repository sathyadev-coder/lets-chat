//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("roomName");
user_name = localStorage.getItem("user_name");

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location = "index.html";
      
      
      }
      function send(){
      Textinput = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      username: user_name, 
      message: Textinput,
      like:0
      });
      document.getElementById("msg").value = "";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log (firebase_message_id);
console.log (message_data);
name1 = message_data['username'];
like_no = message_data['like'];
sms = message_data['message'];
 nametag = "<h4>"+name1+"<img class ='user_tick' src='tick.png'></h4>";
 smstag= "<h4 class='message_h4' >"+sms+"</h4>";
 buttontag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like_no+" onclick='updatelike(this.id)'>";
 spantag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like_no+"</spam> </button> </hr>";
 row=nametag+smstag+buttontag+spantag;
 document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();
function updatelike(smsid) {
console.log("like button clicked"+smsid);
count=document.getElementById(smsid).value
updatedlike=Number(count)+1
console.log(updatedlike)
firebase.database().ref(room_name).child(smsid).update({
      like:updatedlike
});
}