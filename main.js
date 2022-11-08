let topSecrionImgBtn = document.querySelector(".img-for-input-top");
let inputLanguage = document.querySelector(".input-language");
let changeLanguageImg = document.querySelector(".change-language-img");
let changeLanguageUl = document.querySelector(".change-language-ul");



topSecrionImgBtn.addEventListener("click", () => {
  
  inputLanguage.classList.toggle("clear")

  // inputLanguage.removeAttribute("placeholder");
  changeLanguageImg.classList.toggle("clear");



  changeLanguageUl.classList.toggle("change-language-ul");
 
  // console.log(inputLanguage);
 
  // changeLanguageUl.style.display = "block"

  return;
});


let serchImg = document.querySelector(".serch-img")
let searchInput = document.querySelector(".search-input")

serchImg.addEventListener("click", () => {
  searchInput.classList.toggle("opacity")
})


let heroSectionSlider = document.querySelector(".hero-section-slider")
let heroSectionSliderMiddle = document.querySelector(".hero-section-slider-middle")
let heroSectionSliderBack = document.querySelector(".hero-section-slider-back")
let circleThree = document.querySelector(".three")
let circleTwo = document.querySelector(".two")
let circleFive = document.querySelector(".five")
let circleNine = document.querySelector(".nine")
let citcleSeven = document.querySelector(".seven")
let circleFour = document.querySelector(".four")



circleTwo.addEventListener("click", () => {

  heroSectionSlider.classList.toggle("clear");

heroSectionSliderMiddle.classList.toggle("hero-section-slider-middle")

})

circleThree.addEventListener("click", () => {

  heroSectionSlider.classList.toggle("clear");
  heroSectionSliderBack.classList.toggle("hero-section-slider-back")

})



citcleSeven.addEventListener("click", () => {

  heroSectionSlider.classList.toggle("clear");

heroSectionSliderMiddle.classList.toggle("hero-section-slider-middle")

})
circleNine.addEventListener("click", () => {

  heroSectionSliderMiddle.classList.toggle("hero-section-slider-middle")
  heroSectionSliderBack.classList.toggle("hero-section-slider-back")
})

circleFour.addEventListener("click", () => {

  heroSectionSlider.classList.toggle("clear");

heroSectionSliderBack.classList.toggle("hero-section-slider-back")

})

circleFive.addEventListener("click", () => {

  heroSectionSliderMiddle.classList.toggle("hero-section-slider-middle")
  heroSectionSliderBack.classList.toggle("hero-section-slider-back")
})

