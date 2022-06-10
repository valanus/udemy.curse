"use strict";

let num = 50;

/* while (num < 55) {
    console.log(num);
    num++;
} */

/* do{
    console.log(num);
    num++;
}
while (num < 55); */                 // условие может идти за циклом

for (let i = 1; i < 0; i++) {         // цикл оринтируется на і и поэтому применяется 7 раз(в даном случае)
        console.log(num);
    num++;
}