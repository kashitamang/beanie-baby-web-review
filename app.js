/* Imports */
import { getBeanieBabies } from './fetch-utils.js';
import { renderBeanieBaby } from './render-utils.js';

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-baby-list');

/* State */
let beanieBabies = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getBeanieBabies();
    beanieBabies = response;
    console.log(response);
    displayBeanieBabies();
});

/* Display Functions */

function displayBeanieBabies() {
    for (const beanieBaby of beanieBabies) {
        const beanieBabyEl = renderBeanieBaby(beanieBaby);
        beanieBabiesEl.append(beanieBabyEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
