`use strict`

// CONDITIONALS

// TRUTHY and FALSEY

// FALSEY

// false - false
// 0 - zero
// `` - an empty string
// undefined
// null - empty
// NaN - not a number

// everything else is TRUTHY

// IF (ELSE and ELSE IF)
// check a condition
// run a code block if it is met

let a = 2;

if (a == 0){
    console.log(`sunshine`);
} else if (a != 2) {
    console.log(`moonlight`);
} else {
    console.log(`boogie`);
}

// TERNARY IF statment
// shorthand version of and IF ELSE statement

let x = 2;

if (x == 2){
    console.log(`x is 2`);
} else {
    console.log(`x is not 2`);
}

let y = 2;

y==2 ? console.log(`y is 2`) : console.log(`y is not 2`);


// EQUALITY and TYPE

// type is mutable
// we can compare different data types with the same value

1 == `1` ? console.log(true) : console.log(false);

// JavaScript is mutating the TYPE so that ONE equals ONE
// it is only checking the VALUE

// STRICTLY EQUAL OPERATOR
// ===
// checks the TYPE and the VALUE

1 === `1` ? console.log(true) : console.log(false);