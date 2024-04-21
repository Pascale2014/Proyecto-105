
//AGREGA TUS ENLACES DE FIREBASE AQUÍ


var firebaseConfig = {
    apiKey: "AIzaSyAk_gg7HoMJdVlisKbiUdJ35idDg-P9s",
    authDomain: "social-e5855. firebaseapp.com",
    databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
    projectId: "social-e5855",
    storageBucket: "social-e5855.appsot.com",
    messagingSenderId: "671543009162",
    appId: "1:671543009162:web:a881fdddf02bf05c0b273"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



