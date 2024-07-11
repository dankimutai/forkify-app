const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}; 

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
console.log('logged in');
import { ship } from './shoppingcart.js';
console.log('importing module');
console.log(ship);

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
