// const firebaseConfig = {
//   apiKey: "AIzaSyCTTfBXRMWuV79s8IaT_I5cznUbx4dIfyI",
//   authDomain: "hackathon-contactform.firebaseapp.com",
//   databaseURL: "https://hackathon-contactform-default-rtdb.firebaseio.com",
//   projectId: "hackathon-contactform",
//   storageBucket: "hackathon-contactform.firebasestorage.app",
//   messagingSenderId: "665193473692",
//   appId: "1:665193473692:web:092aba54631ec50b656f59",
// };
// firebase.initializeApp(firebaseConfig);

// var contactFormDB = firebase.database().ref("hackathon-contactForm");

// document.getElementById("contact-form").addEventListener("submit", submitForm);
// function submitForm(e) {
//   e.preventDefault();
//   var name = getElementVal("name");
//   var email = getElementVal("email");
//   var message = getElementVal("message");
//   saveMessages(name, email, message);
//   const saveMessages = (name, email, message) => {
//     var newContactForm = contactFormDB.push();
//     newContactForm.set({
//       name: name,
//       email: email,
//       message: message,
//     });
//   };
// }

// // const getElementVal = (id) => {
// //   return document.getElementById(id).value;
// // };
const firebaseConfig = {
    apiKey: "AIzaSyCTTfBXRMWuV79s8IaT_I5cznUbx4dIfyI",
    authDomain: "hackathon-contactform.firebaseapp.com",
    databaseURL: "https://hackathon-contactform-default-rtdb.firebaseio.com",
    projectId: "hackathon-contactform",
    storageBucket: "hackathon-contactform.firebasestorage.app",
    messagingSenderId: "665193473692",
    appId: "1:665193473692:web:092aba54631ec50b656f59",
  };
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("hackathon-contactForm");
  
  // Event listener for the form
  document.getElementById("contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // Get form values
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");
  
    // Save messages to Firebase
    saveMessages(name, email, message);
  
    // Optionally, reset the form or show a success message
    document.getElementById("contact-form").reset();
    alert("Your message has been submitted!");
  }
  
  // Function to save messages to Firebase
  const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
      name: name,
      email: email,
      message: message,
    });
  };
  
  // Function to get form values
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  