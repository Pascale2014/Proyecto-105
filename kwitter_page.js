var firebaseConfig = {
    apiKey: "AIzaSyA6paSrhAIWKVO4Fgz7Z4gRF47t1qzqsBw",
    authDomain: "prueba-60a41.firebaseapp.com",
    databaseURL: "https://prueba-60a41-default-rtdb.firebaseio.com",
    projectId: "prueba-60a41",
    storageBucket: "prueba-60a41.appspot.com",
    messagingSenderId: "902694735346",
    appId: "1:902694735346:web:b58ca2b6d8c4061a472f6b"
  };
  
  firebase.initializeApp(firebaseConfig);
  
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
     function getData() { firebase.database().ref("/"+room_name).on('value',
     function(snapshot) { document.getElementById("output"). internalHTML = "";
     snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData =
     childSnapshot.val(); if(childKey != "propósito") {
     firebase_message_id = childKey;
     message_data = childData;
     // Inicia el código.
     function updateLike(message_id)
     {
       console.log("presionó el botón de Me gusta: " + message_id);
         button_id = message_id;
         likes = document.getElementById(button_id).value;
         updated_likes = Number(likes) + 1;
         console.log(updated_likes);
     
         firebase.database().ref(room_name).child(message_id).update({
             like : updated_likes  
          });
     
     }
     
     function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location.replace("index.html");
     }
     // Termina el código.
     
     } }); }); }
  }