import { faqs } from './faq.mjs'; // Import the exported data

const faqMain = document.querySelector('.faq-main')
const searchInp = document.getElementById('faq_search')
const searchBtn = document.getElementById('search')

const faqsDispArr = Array.from(faqMain.children)



function renderFaqs(render){
    faqMain.innerHTML = "";
    render.forEach(faq => {
        faqMain.innerHTML += (`<div
                class="faq-card w-full bg-[#ececec] flex-col justify-start items-start flex"
              >
                <div
                  class="faq-head p-[20px] text-[#125505] hover:bg-[#125505] hover:text-white self-stretch justify-between items-center inline-flex"
                >
                  <div
                    class="text-mdbase md:text-xl font-bold font-head uppercase leading-[18px]"
                  >
                    ${faq.question}
                  </div>
                  <div
                    class="faq-opened text-[30px] font-normal font-head uppercase leading-[18px]"
                  >
                    -
                  </div>
                  <div
                    class="faq-closed text-[30px] font-normal font-head uppercase leading-[18px]"
                  >
                    +
                  </div>
                </div>
                <div class="faq-content w-full px-[20px]">
                  <div class="w-full border-[1px] border-[#a2a2a2]"></div>
                </div>
                <div
                  class="faq-content self-stretch p-[20px] text-base md:text-mdbase text-blackfont-normal font-body leading-tight"
                >
                  ${faq.answer}
                </div>
              </div>`)
    });

        // Re-apply click event listeners to newly rendered FAQ cards
        const updatedFaqCards = document.querySelectorAll('.faq-card');
    
        updatedFaqCards.forEach(card => {
            card.addEventListener("click", () => {
                updatedFaqCards.forEach((elem) => {
                    if (elem === card) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                });
            });
        });
}

renderFaqs(faqs)


faqsDispArr.forEach(card => {
    card.addEventListener("click", ()=>{
        faqsDispArr.forEach((elem)=>{
            if(elem === card){
                elem.classList.add("active")
            } else {
                elem.classList.remove("active")
            }
        })
    })
});


// search faqs

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const input = searchInp.value.toLowerCase();

    const newFaqs = faqs.filter(faq =>{
        return faq.answer.toLowerCase().includes(input) || faq.question.toLowerCase().includes(input)
    })

    renderFaqs(newFaqs)
    
})
