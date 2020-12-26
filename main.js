let prompt = require('prompt-sync')({sigint: true});

let bitcoin = prompt("Give me the Bitcoin:");
let increase = prompt ("Inrecase :");

bitcoin = parseFloat(bitcoin);
increase = parseFloat(increase);

let total_increase = (bitcoin *10) /100;
let total_bitcoin = (total_increase + bitcoin);

console.log(total_bitcoin)