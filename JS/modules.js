// utils.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { sum, multiply } from './utils.js';
console.log(sum(2, 3));


// utils.js
module.exports = { sum: (a, b) => a + b };

// main.js
const { sum } = require('./utils');
console.log(sum(2, 3));

// NAMED EXPORTS 

export const greet = () => console.log('Hello');

import { greet } from './file.js';

// DEFAULT EXPORTS

export default function greet() { console.log('Hello'); }
import greet from './file.js';

