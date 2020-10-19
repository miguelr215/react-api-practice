console.log('The code has started');
const duration = Math.floor(Math.random() * 5000);
setTimeout(() => {
    console.log(`Hey I waited ${duration} milliseconds`);
}, duration);
console.log('This is the last line of code');