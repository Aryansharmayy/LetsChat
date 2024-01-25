
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

function addroom()
{

room_name = document.getElementById("room_name").value;


firebase.database().ref("/").child(room_name).update({
      purpose: "value"
});

localStorage.setItem("room_name", room_name);

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

     
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

}

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
      

