const hamburgerBtn = document.querySelector('#hamburger-btn');
const mobileMenuList = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener('click', ()=>{
    // alert("opening menu, please wait")
    mobileMenuList.classList.toggle("h-0")
    mobileMenuList.classList.toggle("h-fit")
})

mobileMenuList.addEventListener('click', ()=>{
    // alert("closing menu, please wait")
    mobileMenuList.classList.toggle("h-0")
    mobileMenuList.classList.toggle("h-fit")
})


// contact form should not direct

window.addEventListener("load", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
        form.reset()
      })
    });
  });


// change copyright year to resend year
const copyrightYear = document.querySelector(".copyright-year");

const date = new Date();

copyrightYear.textContent = date.getFullYear();
