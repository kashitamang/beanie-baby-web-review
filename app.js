/* Imports */
import { getBeanieBabies, getZodiacs } from './fetch-utils.js';
import { renderBeanieBaby, renderZodiacs } from './render-utils.js';

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-baby-list');
const zodiacSelect = document.getElementById('zodiac-select');
const searchForm = document.getElementById('search-form');
console.log(zodiacSelect);

/* State */
let beanieBabies = [];
let signs = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanieBabies();
    const response = await getBeanieBabies();
    beanieBabies = response;

    const zodiacResponse = await getZodiacs();
    signs = zodiacResponse;

    displayBeanieBabies();
    displayZodiacOptions();
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // WIP
    const sign = zodiacSelect.value;
    console.log(sign);
    findBeanieBabies(sign);
});

/* Display Functions */

async function findBeanieBabies(sign) {
    const response = await getBeanieBabies(sign);
    signs = response;
    console.log('response', response);
    displayBeanieBabies();
}

function displayBeanieBabies() {
    beanieBabiesEl.textContent = '';

    for (const beanieBaby of beanieBabies) {
        const beanieBabyEl = renderBeanieBaby(beanieBaby);
        beanieBabiesEl.append(beanieBabyEl);
    }
}

function displayZodiacOptions() {
    for (const sign of signs) {
        const option = renderZodiacs(sign);
        zodiacSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
