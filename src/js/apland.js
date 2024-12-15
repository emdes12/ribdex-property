// Import the functions you need from the SDKs you need
// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref as databaseRef,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWQ552it5NQwc7LCqlZ9LS2TPfYRv5S9w",
  authDomain: "real-ribdex-property.firebaseapp.com",
  projectId: "real-ribdex-property",
  storageBucket: "real-ribdex-property.firebasestorage.app",
  messagingSenderId: "634531624880",
  appId: "1:634531624880:web:872297c7bfa67dd7150875",
  databaseURL: "https://real-ribdex-property-default-rtdb.firebaseio.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
let propData = "";

// display proerty per object parsed
const dispProps = (objData) => {
  propsCardContainer.innerHTML = "";
  console.log("get ready");
  console.log(objData);
  for (const prop in objData) {
    console.log(objData[prop]);
    for (const estate in objData[prop]) {
      const property = objData[prop][estate];

      const card = document.createElement("div");
      card.classList.add("bg-white");
      card.classList.add("rounded-lg");
      card.classList.add("shadow-lg");
      card.classList.add("overflow-hidden");
      propsCardContainer.appendChild(card);

      const propImg = document.createElement("img");
      propImg.classList.add("w-full");
      propImg.classList.add("h-40");
      propImg.classList.add("object-cover");
      propImg.src = property.propertyImage;
      card.appendChild(propImg);

      const cardP = document.createElement("div");
      cardP.classList.add("p-4");
      card.appendChild(cardP);

      const propertyName = document.createElement("h3");
      propertyName.classList.add("text-lg");
      propertyName.classList.add("font-semibold");
      propertyName.classList.add("text-gray-800");
      propertyName.classList.add("h-[56px]");
      propertyName.textContent = estate;
      cardP.appendChild(propertyName);

      const propertyLocation = document.createElement("p");
      propertyLocation.classList.add("mt-1");
      propertyLocation.classList.add("text-sm");
      propertyLocation.classList.add("text-gray-600");
      propertyLocation.classList.add("h-[40px]");
      propertyLocation.textContent = property.propertyLocation;
      cardP.appendChild(propertyLocation);

      const propOrders = document.createElement("p");
      propOrders.classList.add("flex");
      propOrders.classList.add("items-center");
      propOrders.classList.add("justify-between");
      propOrders.classList.add("mt-3");
      cardP.appendChild(propOrders);

      const propertyPrice = document.createElement("span");
      propertyPrice.classList.add("text-indigo-600");
      propertyPrice.classList.add("font-bold");
      const formattedPrice = formatNumberWithCommas(property.priceNaira); // Format the price
      propertyPrice.textContent = "₦" + formattedPrice;
      propOrders.appendChild(propertyPrice);

      const propertyFilled = document.createElement("span");
      propertyFilled.classList.add("text-green-600");
      propertyFilled.classList.add("font-bold");
      propertyFilled.textContent = property.formFilled + " fill submitted";
      propOrders.appendChild(propertyFilled);
    }
    console.log("done");
  }
};


function getpropIndv() {
  // propsCardContainer.innerHTML = "";
  const database = getDatabase();
  const dataRef = databaseRef(database, "properties/");
  console.log("startting");
  

  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot)
        let propDatas = snapshot.val();
        console.log(propDatas);
        propData = propDatas;
        localStorage.setItem("propDataStore", propData)
        console.log(propData)
        // dispProps(propData);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
getpropIndv();

console.log(localStorage.getItem("propDataStore"))