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
    const response = await getBeanieBabies();
    beanieBabies = response;

    const zodiacResponse = await getZodiacs();
    signs = zodiacResponse;

    findBeanieBabies();
    displayBeanieBabies();
    displayZodiacOptions();
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // WIP
    const value = zodiacSelect.value;
    console.log(value);
    findBeanieBabies(value);
});

/* Display Functions */

async function findBeanieBabies(sign) {
    const response = await getZodiacs(sign);
    signs = response;
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
