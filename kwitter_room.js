var user_name = localStorage.getItem("user_name");
document.getElementById("algo").innerHTML="Welcome" + user_name;
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }

    