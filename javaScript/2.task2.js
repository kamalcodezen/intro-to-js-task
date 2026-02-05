/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
*/

let mathematics = 75.25;
let physics = 65;
let bangla = 80;
let biology = 35.45;
let chemistry = 99.50;

let total = mathematics + physics + bangla + biology + chemistry;
let average = total / 5;
console.log(average.toFixed(2));