// Set Time Out süre sonunda 1 defa çalışır
// Set Interval süre boyunca tekrar eder

import { rejects } from "assert"
import { resolve } from "path/posix"

// TimetOut

// setTimeout(() => {
//     console.log('Patika');
// }, 20);

// console.log('Naber');

// setTimeout(() => {
//     console.log('Selam');
// }, 10);

// Set Interval

// let count = 0;

// let interval;

// interval = setInterval(() => {
//     count += 1;
//     console.log('Count', count);

//     if (count > 4) {
//         clearInterval(interval);
//     }
// }, 1000);

const myPromise = (n) => {
    return new Promise((resolve, reject) => {
        if (n === 1) {
            resolve('Selam');
        }
        reject('My Error')
    });
};

myPromise(1).then(console.log).catch(console.log); // 1 Geldiğinde Resolve olur farklı bir şey geldiğinde Reject olur