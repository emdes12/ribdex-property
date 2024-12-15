// Import the Firebase modules (CDN-based approach)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQ552it5NQwc7LCqlZ9LS2TPfYRv5S9w",
  authDomain: "real-ribdex-property.firebaseapp.com",
  databaseURL: "https://real-ribdex-property-default-rtdb.firebaseio.com",
  projectId: "real-ribdex-property",
  storageBucket: "real-ribdex-property.firebasestorage.app",
  messagingSenderId: "634531624880",
  appId: "1:634531624880:web:872297c7bfa67dd7150875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
const addPropForm = document.querySelector("#addcontactform");
addPropForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form field values
  const propertyImage = document.getElementById("property-image").files[0];
  const videoLink = document.getElementById("video-link").value;
  const propertyName = document.getElementById("property-name").value;
  const propertyLocation = document.getElementById("property-location").value;
  const priceNaira = document.getElementById("price-naira").value;
  const propertySize = document.getElementById("property-size").value;
  const propertyType = document.getElementById("property-type").value;
  const available = document.getElementById("available").checked;
  const propertyDetails = document.getElementById("property-details").value;

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

    // Log the final data or send it to your database
    console.log({
      propertyName,
      imageUrl,
    });

    console.log("Property uploaded successfully!");
    try {
      // Generate a unique key for the property
      const propertyKey = `${propertyType}/${propertyName}`;

      // Prepare the data object
      const propertyData = {
        propertyImage: imageUrl,
        videoLink,
        propertyName,
        propertyLocation,
        priceNaira,
        propertySize,
        propertyType,
        available,
        propertyDetails,
        formFilled: 0,
      };

      // Upload data to Firebase Realtime Database
      await set(ref(database, `properties/${propertyKey}`), propertyData);

      addPropForm.reset();
      contactForm();
      alert("Property added successfully!");
    } catch (error) {
      console.error("Error uploading property: ", error);
      alert("Failed to add property. Please try again.");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    alert("Failed to upload property. Please try again.");
  }
});
