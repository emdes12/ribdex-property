const forms = document.querySelectorAll('form');
const pickService = document.getElementById('pickservice');
const successBox = document.getElementById('success');
let successValue;
let selectedServices;


// Function to log the current hash value
function logHashValue() {
    const hashValue = window.location.hash.substring(1);
    
    
    if(hashValue){
      forms.forEach(form => {
        if(form.id === hashValue){
          form.classList.remove('hidden')
          console.log(form)
        } else {
          form.classList.add('hidden')
        }
      });
      pickService.classList.add('hidden')
      successmessage(false);
    }
}
  
window.addEventListener("hashchange", logHashValue);
  
logHashValue()

// function to sending message 
function sendMessage(parms) {
  console.log('clicked on send')
  successValue = parms;

  if(successValue){
    forms.forEach(form => {
        form.classList.add('hidden')
    });
    successBox.classList.remove('hidden')
    window.location.hash = ""
    pickService.classList.add('hidden')
} else {
  successBox.classList.add('hidden')
}
}

// form submission and form should not reload on submitting
window.addEventListener("load", function() {
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        // alert("Success!");
        sendMessage(true); // Call the sendMessage function
        form.reset()
      })
    });
  });
});



