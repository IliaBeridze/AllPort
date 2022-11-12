let countrySelect = document.querySelector(".country-select");

let btn = document.querySelector(".button");

let info = document.querySelector(".info");



let region = document.querySelector(".location");
let updated = document.querySelector(".updated")
let confirmed = document.querySelector(".confirmed")

let data = null;

axios
  .get("https://covid-api.mmediagroup.fr/v1/cases")
  .then(function (response) {
    data = response.data;

    let arrayCountry = Object.keys(data);

    arrayCountry.forEach((element) => {
      let option = document.createElement("option");

      countrySelect.appendChild(option);
      option.innerHTML = element;
    });
  

let deaths = document.querySelector(".deaths")
let lifeexperectancy = document.querySelector(".lifeexperectancy")
let infection = document.querySelector(".infection")
let deatrate = document.querySelector(".deatrate")
let call = document.querySelectorAll(".call")

console.log(data)
let deathText = document.querySelectorAll(".death-text")
// console.log(data[countrySelect.value].All);
btn.addEventListener("click", () => {
  // console.log(data[countrySelect.value].All);

updated.innerHTML = data[countrySelect.value].All.updated;

confirmed.innerHTML = data[countrySelect.value].All.confirmed;
  region.innerHTML = data[countrySelect.value].All.location;

deathText.forEach(e => {
  e.classList.toggle('clear')
});
 
call.forEach(e => {
  e.classList.toggle("clear")
})

  deaths.innerHTML = data[countrySelect.value].All.deaths
  lifeexperectancy.innerHTML = data[countrySelect.value].All.life_expectancy;

  infection .innerHTML = data[countrySelect.value].All.deaths
  deatrate .innerHTML = data[countrySelect.value].All.deaths

  // console.log(deaths);
});

console.log(data);

});


