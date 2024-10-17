// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX1G-Kavv1Yi7N0cG1zqVPB0E9Vb8HMqg",
  authDomain: "ironlifte.firebaseapp.com",
  databaseURL: "https://ironlifte-default-rtdb.firebaseio.com",
  projectId: "ironlifte",
  storageBucket: "ironlifte.appspot.com",
  messagingSenderId: "802903316133",
  appId: "1:802903316133:web:8207f9ba4eaa525faa1f4c",
  measurementId: "G-QD9XV7JYCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

document.querySelector("main > form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting the traditional way

  // Get the email from the input field
  const email = document.querySelector("main > form > input").value;
  document.querySelector("main > form > input").value = "";
  if (email == "") {
    return;
  }

  // Reference to where you want to store the emails in the Realtime Database
  const emailsRef = ref(db, "emails/" + String(Date.now()));

  // Push the email to the database
  set(emailsRef, email);

  setTimeout(() => {
    window.location.replace("/ironlifters/blog/");
  }, 500);
});
