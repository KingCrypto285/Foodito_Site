import React from "react";
import "./style.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HXAB_R1gkGWtRfomYxh3awqV68O1l7c",
  authDomain: "yolup-ea4fc.firebaseapp.com",
  databaseURL: "https://yolup-ea4fc.firebaseio.com",
  projectId: "yolup-ea4fc",
  storageBucket: "yolup-ea4fc.appspot.com",
  messagingSenderId: "775898317407",
  appId: "1:775898317407:web:801ef1eca08cf1de73d1ea",
  measurementId: "G-YJDYL5KC2N"
};

function login()
{
  window.alert("YES");
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button type="button" onClick={login} >TYPE</button>
    </div>
  );
}
