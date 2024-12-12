// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

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
const storage = getStorage(app);

// Handle form submission
const addPropForm = document.querySelector("#addcontactform");
addPropForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("clicked");

  // Get form values
  const propertyImage = document.getElementById("property-image").files[0];
  const videoLink = document.getElementById("video-link").value;
  const propertyName = document.getElementById("property-name").value;
  const propertyLocation = document.getElementById("property-location").value;
  const priceNaira = document.getElementById("price-naira").value;
  const propertySize = document.getElementById("property-size").value;
  const propertyType = document.getElementById("property-type").value;
  const isAvailable = document.getElementById("available").checked;
  const propertyDetails = document.getElementById("property-details").value;

  let imageUrl = "";

  // Cloudinary details
  const cloudName = "dm2qygoyi";
  const unsignedPreset = "property_upload";

  // FormData for Cloudinary upload
  const formData = new FormData();
  formData.append("file", propertyImage);
  formData.append("upload_preset", unsignedPreset);

  try {
    // Upload file to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log("File uploaded successfully:", data);

    // Store the uploaded image URL
    const imageUrl = data.secure_url;

    // Save property details to Firestore
    const propertyData = {
      image: imageUrl,
      videoLink: videoLink,
      name: propertyName,
      location: propertyLocation,
      price: Number(priceNaira),
      size: Number(propertySize),
      type: propertyType,
      available: isAvailable,
      details: propertyDetails,
      formFilled: 0,
      createdAt: new Date().toISOString(),
    };

    const docRef = doc(
      db,
      "properties",
      propertyType,
      "items",
      propertyName.replace(/\s+/g, "-").toLowerCase()
    );
    await setDoc(docRef, propertyData);

    alert("Property uploaded successfully!");
    addPropForm.reset();
    contactForm();
  } catch (error) {
    console.error("Error uploading property:", error);
    alert("Failed to upload property. Please try again.");
  }
});
