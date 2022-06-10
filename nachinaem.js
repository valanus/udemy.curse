"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uzhe posmotreli?", "");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Odin iz poslednix filmov?", ""),
      b = prompt("Na skolko ocenintye ego?", ""),
      c = prompt("Odin iz poslednix filmov?", ""),
      d = prompt("Na skolko ocenintye ego?", "");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);