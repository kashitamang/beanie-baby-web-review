/* Imports */
import { getBeanieBabies, getZodiacs } from './fetch-utils.js';
import { renderBeanieBaby, renderZodiacs } from './render-utils.js';

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-baby-list');
const zodiacSelect = document.getElementById('zodiac-select');

/* State */
let beanieBabies = [];
let signs = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getBeanieBabies();
    beanieBabies = response;
    console.log(response);
    findBeanieBabies();

    const zodiacResponse = await getZodiacs();
    signs = zodiacResponse;

    displayBeanieBabies();
    displayZodiacOptions();
});

/* Display Functions */

async function findBeanieBabies(sign) {
    const response = await getZodiacs(sign);
    signs = response.data;
    displayBeanieBabies();
}

function displayBeanieBabies() {
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
