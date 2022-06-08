"use strict";

let incrr = 10,
    decr = 10;

/* incrr++;
decr--; */
console.log(++incrr);
console.log(decr--);

console.log(5%2);
console.log(2*4 == "8");
console.log(2*4 === 8);
console.log(2 + 2 * 2 != 8);

const isChecked = true,
      isClosed = true;
console.log(isChecked && isClosed); // operator i

const isChecked = true,
      isClosed = false;
console.log(isChecked || isClosed); // operator ili

const isChecked = false,
      isClosed = false;
console.log(isChecked || !isClosed); // operator otricaniya(menyaet znacheniye na protivopolozhnoye)
