const firebaseConfig = {
      apiKey: "AIzaSyBuRLzEWVFRpP1BVMQJGVOojbpVLJJoLy8",
      authDomain: "kwiteer-cb27b.firebaseapp.com",
      databaseURL: "https://kwiteer-cb27b-default-rtdb.firebaseio.com",
      projectId: "kwiteer-cb27b",
      storageBucket: "kwiteer-cb27b.appspot.com",
      messagingSenderId: "411757894067",
      appId: "1:411757894067:web:303e59e651970c0aec13c6"
    };
    
  
     firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


document.getElementById("msg").value = "";
}