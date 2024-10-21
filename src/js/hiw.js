const hiwHead = document.getElementById("hiw_head");
const hiwInd = document.getElementById("hiw_ind");
const hiwConsult = document.getElementById("hiw_consult");
const hiwCustom = document.getElementById("hiw_custom");
const hiwBooking = document.getElementById("hiw_booking");
const hiwContent = document.getElementById("hiw_content");
const hiw1 = document.getElementById("hiw_1");
const hiw2 = document.getElementById("hiw_2");
const hiw3 = document.getElementById("hiw_3");

// goto step 2 with the head btn
hiwCustom.addEventListener("click", () => {
  step2();
});

hiw2.addEventListener("click", () => {
  step2();
});

// Goto step 3 with the btn
hiwBooking.addEventListener("click", () => {
  step3();
});

hiw3.addEventListener("click", () => {
  step3();
});

// Goto step 1 with the btn
hiwConsult.addEventListener("click", () => {
  step1();
});

hiw1.addEventListener("click", () => {
  step1();
});

// functions

const step1 = () => {
  hiwInd.classList.add("left-0");
  hiwInd.classList.remove("left-[110px]");
  hiwInd.classList.remove("left-[220px]");

  hiwConsult.classList.add("text-white");
  hiwConsult.classList.remove("text-[#125505]");

  hiwBooking.classList.add("text-[#125505]");
  hiwBooking.classList.remove("text-white");

  hiwCustom.classList.remove("text-white");
  hiwCustom.classList.add("text-[#125505]");

  hiwContent.classList.add("left-0");
  hiwContent.classList.remove("left-[-330px]");
  hiwContent.classList.remove("left-[-660px]");

  hiw1.classList.remove("bg-[#61C93A]");
  hiw1.classList.add("bg-[#125505]");
  hiw2.classList.remove("bg-[#125505]");
  hiw2.classList.add("bg-[#61C93A]");
  hiw3.classList.remove("bg-[#125505]");
  hiw3.classList.add("bg-[#61C93A]");
};

const step2 = () => {
  hiwInd.classList.remove("left-0");
  hiwInd.classList.remove("left-[220px]");
  hiwInd.classList.add("left-[110px]");

  hiwConsult.classList.remove("text-white");
  hiwConsult.classList.add("text-[#125505]");

  hiwCustom.classList.remove("text-[#125505]");
  hiwCustom.classList.add("text-white");

  hiwBooking.classList.remove("text-white");
  hiwBooking.classList.add("text-[#125505]");

  hiwContent.classList.remove("left-0");
  hiwContent.classList.remove("left-[-660px]");
  hiwContent.classList.add("left-[-330px]");

  hiw1.classList.remove("bg-[#125505]");
  hiw1.classList.add("bg-[#61C93A]");
  hiw2.classList.remove("bg-[#61C93A]");
  hiw2.classList.add("bg-[#125505]");
  hiw3.classList.remove("bg-[#125505]");
  hiw3.classList.add("bg-[#61C93A]");
};

const step3 = () => {
  hiwInd.classList.remove("left-0");
  hiwInd.classList.remove("left-[110px]");
  hiwInd.classList.add("left-[220px]");

  hiwConsult.classList.remove("text-white");
  hiwConsult.classList.add("text-[#125505]");

  hiwBooking.classList.remove("text-[#125505]");
  hiwBooking.classList.add("text-white");

  hiwCustom.classList.remove("text-white");
  hiwCustom.classList.add("text-[#125505]");

  hiwContent.classList.remove("left-0");
  hiwContent.classList.remove("left-[-330px]");
  hiwContent.classList.add("left-[-660px]");

  hiw1.classList.remove("bg-[#125505]");
  hiw1.classList.add("bg-[#61C93A]");
  hiw2.classList.remove("bg-[#125505]");
  hiw2.classList.add("bg-[#61C93A]");
  hiw3.classList.remove("bg-[#61C93A]");
  hiw3.classList.add("bg-[#125505]");
};
