"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uzhe posmotreli?", "");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Odin iz poslednix filmov?", ""),
          b = prompt("Na skolko ocenintye ego?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    console.log('done');    
    } else {
        console.log('Error')
        i--;
    }

    personalMoviesDB.movies[a] = b;
}

if (personalMoviesDB.count < 10) {
    console.log('Prosmotreno dovolno malo filmow');
} else if (personalMoviesDB.count >=10 && personalMoviesDB.count < 30) {
console.log('Vi klassicheskiy zritel`');
} else if (personalMoviesDB.count >= 30) {
    console.log("Vi kinoman!");
} else {
    console.log("Proisoshla oshibka")
}
    

console.log(personalMoviesDB);