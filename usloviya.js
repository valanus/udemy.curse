"use strict";

if (4 == 4) {
    console.log('Ok');
} else {
    console.log('Error');    
}

const num = 50;
 if (num < 49) {          // это первым

    console.log('Error');
    
} else if (num > 100){           // потом проверяется если первое неверно

    console.log('Mnogo');

} else {
    console.log('Ok');            // если ничего не подошло 
}

(num === 50) ? console.log('Ok') : console.log('Error'); // тернарный оператор

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100: 
        console.log('Neverno');
        break;
    case 50:
        console.log('V tochku');
        break;    
    default:
        console.log('Ne poveslo');          // если ниодно не совпало
        break;
}