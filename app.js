/* Imports */
import { getBeanieBabies } from './fetch-utils.js';
/* Get DOM Elements */

/* State */
let beanieBabies = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getBeanieBabies();
    beanieBabies = response;
    console.log(response);
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
