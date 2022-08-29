const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Country Name: ${country.name.common} </h3>
    <h3>Country Capital: ${country.capital} </h3>
   <button onclick = "loadCountryDetail('${country.cca2}')">Details</button>
    
    `;
    countryContainer.appendChild(countryDiv);
  });
};

const loadCountryDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log("get country detail", code);
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  // console.log(country);
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  
  <h2>name: ${country.name.common}</h2>
  <img src="${country.flags.png}"> </img>
   
  `;
};
loadCountries();
