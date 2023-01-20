/* Imports */
import { getBeanieBabies, getZodiacs } from './fetch-utils.js';
import { renderBeanieBaby, renderBeanieBabyOption } from './render-utils.js';

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

    const zodiacResponse = await getZodiacs();
    signs = zodiacResponse;
    console.log(zodiacResponse);

    displayBeanieBabies();
    displayBeanieBabyOptions();
});

/* Display Functions */

function displayBeanieBabies() {
    for (const beanieBaby of beanieBabies) {
        const beanieBabyEl = renderBeanieBaby(beanieBaby);
        beanieBabiesEl.append(beanieBabyEl);
    }
}

function displayBeanieBabyOptions() {
    for (const sign of signs) {
        const option = renderBeanieBabyOption(sign);
        zodiacSelect.append(option);
    }
}
// (don't forget to call any display functions you want to run on page load!)
