/*



*/
"use strict";

const library = [
  [`The Catcher in the Rye`, `J. D. Salinger`, 1951],
  [`One Hundred Years of Solitude`, `Gabriel García Márquez`, 1967],
  [`Catch-22`, `Joseph Heller`, 1961],
  [`Nineteen Eighty-Four`, `George Orwell`, 1949],
];

const sortedLibrary = library.toSorted((a, b) => a[2] - b[2]);
console.log(library);
console.log(sortedLibrary);
