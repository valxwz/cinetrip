//grab a form
const form = document.getElementById("contactForm");
const form2 = document.getElementById("contactForm2");

//grab an input
const inputEmail = document.getElementById("cemail");
const inputEmail2 = document.getElementById("cemail2");

//config your firebase push
const config = {
  apiKey: "AIzaSyCydnM89FN7E0C7XvASPb2_4pMolNKOEHo",
  authDomain: "cinetripv1.firebaseapp.com",
  databaseURL: "https://cinetripv1.firebaseio.com",
  projectId: "cinetripv1",
  storageBucket: "cinetripv1.appspot.com",
  messagingSenderId: "1080605216749",
};

//create a functions to push
function firebasePush(input) {
  //prevents from braking
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  //push itself
  var mailsRef = firebase.database().ref("Subscription").push().set({
    email: input.value,
  });
}

//push on form submit
if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    firebasePush(inputEmail);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    form.reset();
  });
}

if (form2) {
  form2.addEventListener("submit", function (evt) {
    evt.preventDefault();
    firebasePush(inputEmail2);

    // Show alert
    document.getElementById("alert2").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
      document.getElementById("alert2").style.display = "none";
    }, 3000);

    // Clear form
    form2.reset();
  });
}
