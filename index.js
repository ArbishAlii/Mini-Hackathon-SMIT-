       
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBc3lqxcw1O9jPntyDhxdfZ8hueA-Vzi3U",
        authDomain: "contact-form-c157e.firebaseapp.com",
        projectId: "contact-form-c157e",
        storageBucket: "contact-form-c157e.firebasestorage.app",
        messagingSenderId: "909314840383",
        appId: "1:909314840383:web:f26cd0d2577885cfaba58a"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const database = getDatabase(app);

// Get form elements
const contactForm = document.getElementById('contact-form');

// Add event listener to form
contactForm.addEventListener('submit', (e) => {
e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

// Push data to Firebase
push(ref(database, 'contacts'), {
name: name,
email: email,
message: message,
}).then(() => {
alert('Message submitted successfully!');
contactForm.reset();
}).catch((error) => {
console.error("Error writing to Firebase:", error);
});
});
  









const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const quantity = document.getElementById("quantity");
const confirmBtn = document.getElementById("confirm");

let count = 0;

// Toggle cart form visibility
cartIcon.addEventListener("click", () => {
  cart.style.display = cart.style.display === "none" ? "block" : "none";
});

// Increase quantity
increaseBtn.addEventListener("click", () => {
  count++;
  quantity.textContent = count;
});

// Decrease quantity
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  quantity.textContent = count;
});

// Confirm action
confirmBtn.addEventListener("click", () => {
  alert(`You have added ${count} item(s) to your cart.`);
  cart.style.display = "none"; 
});
