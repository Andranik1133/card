// "use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.altSpellings[3]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
         <p class="country__row"><span>🗣️</span>${data.languages ? Object.values(data.languages)[0] : 'N/A'}</p>
        <p class="country__row"><span>💰</span>${data.currencies ? Object.values(data.currencies)[0].name : 'N/A'}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    console.log(data)
  };

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
};

getCountryData('arm')