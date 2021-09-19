var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function registerbtn() {
    x.style.left = "-850px";
    y.style.left = "8px";
    z.style.left = "110px";
}

function loginbtn() {
    x.style.left = "8px";
    y.style.left = "500px";
    z.style.left = "0px";

}


function login() {
    var email = document.getElementById("emailL").value;
    var password = document.getElementById("passL").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("login successfull");
            window.location.replace("game.html");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign Up successfull")
            db.collection("users").doc(email).set({
                email: email,
                password: password
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}