// Import Firebase and Firestore functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQ552it5NQwc7LCqlZ9LS2TPfYRv5S9w",
  authDomain: "real-ribdex-property.firebaseapp.com",
  projectId: "real-ribdex-property",
  storageBucket: "real-ribdex-property.firebasestorage.app",
  messagingSenderId: "634531624880",
  appId: "1:634531624880:web:872297c7bfa67dd7150875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch properties from Firestore
async function fetchProperties() {
    console.log("called");
    
  try {
    console.log("started");
    // Reference to the 'properties' collection
    const propertiesRef = collection(db, "properties");

    // Query to fetch all properties
    const propertiesSnapshot = await getDocs(propertiesRef);
    console.log("gone");

    // Iterate through each document in the collection
    propertiesSnapshot.forEach(async (doc) => {
        console.log("each type start");
      console.log(`Property Type: ${doc.id}`); // Each property type is a document
      console.log("each type got");
      

      // Fetch sub-collection under each property type
      const propertyTypeRef = collection(db, "properties", doc.id, doc.id);
      const propertyDocs = await getDocs(propertyTypeRef);
      console.log("sub collect fetched");

      propertyDocs.forEach((subDoc) => {
        console.log({
          propertyName: subDoc.id,
          ...subDoc.data(), // Logs all data associated with the property
        });
        console.log("delivered");
        
      });
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
}

// Call the function to fetch and log properties
fetchProperties();
