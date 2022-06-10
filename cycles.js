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

for (let i = 1; i < 8; i++) {         // цикл оринтируется на і и поэтому применяется 7 раз(в даном случае)
        console.log(num);
    num++;
}
for (let ii = 1; ii < 10; ii++) {   
    if (ii === 6){
        //break;                        // способ прервать цикл
        continue;                       // сдесь мы пропустили шаг который нам не нужен,тобиш 6
    }       
    console.log(ii);

}