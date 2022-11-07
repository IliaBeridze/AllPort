let topSecrionImgBtn = document.querySelector(".img-for-input-top");
let inputLanguage = document.querySelector(".input-language");
let changeLanguageImg = document.querySelector(".change-language-img");
let changeLanguageUl = document.querySelector(".change-language-ul");



topSecrionImgBtn.addEventListener("click", () => {
  
  inputLanguage.classList.toggle("clear")

  // inputLanguage.removeAttribute("placeholder");
  changeLanguageImg.classList.toggle("clear");



  changeLanguageUl.classList.toggle("change-language-ul");
 
  console.log(inputLanguage);
 
  // changeLanguageUl.style.display = "block"

  return;
});


let serchImg = document.querySelector(".serch-img")
let searchInput = document.querySelector(".search-input")

serchImg.addEventListener("click", () => {
  searchInput.classList.toggle("opacity")
})