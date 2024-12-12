// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCWQ552it5NQwc7LCqlZ9LS2TPfYRv5S9w",
authDomain: "real-ribdex-property.firebaseapp.com",
projectId: "real-ribdex-property",
storageBucket: "real-ribdex-property.firebasestorage.app",
messagingSenderId: "634531624880",
appId: "1:634531624880:web:872297c7bfa67dd7150875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth()
const db = getFirestore();

onAuthStateChanged(auth, (user)=>{
    const loggedInUserId = localStorage.getItem('userID');
    if(loggedInUserId){
        const docRef = doc(db, "user", loggedInUserId);
        getDoc(docRef).then((docSnap)=>{
            if(docSnap.exists()){
                const userData = docSnap.data();
                document.getElementById("usernameDisp").innerText = userData.username;
                console.log(userData.username);
                
            } else{
                console.log("no document found matching document")
            }
        })
        .catch((error)=>{
            console.log("Error getting user detail")
        })
    } else {
        console.log("userID not found in localstorage")
    }
})


const signOutBtn = document.getElementById("signOutBtn")

signOutBtn.addEventListener('click', () => {
    confirm("You're about to be logged out?");
    
    localStorage.removeItem('userID');
    signOut(auth)
    .then(()=>{
        window.location.href='./admin.html';
    })
    .cathc((error)=>{
        console.log("Error:", error);
        
    })
})