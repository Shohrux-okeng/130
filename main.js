1
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    if (operation === '+') {
      return value1 + value2;
    } else if (operation === '-') {
      return value1 - value2;
    } else if (operation === '*') {
      return value1 * value2;
    } else if (operation === '/') {
      return value1 / value2;
    } else {
      return "Invalid operation";
    }
  }


  2

//   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
    if (numbers.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
  }


3

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
  }



  4
//   Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.


function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0;
    } else {
      return n * m;
    }
  }


  5
//   Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return (h * 3600000) + (m * 60000) + (s * 1000);
  }



  6
//   Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

 
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo');
  }


  7
//   Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
    }
  }



  8
//   A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
    return bullets >= dragons * 2;
  }


  9
//   Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

function reverseSeq(n) {
    let arr = [];
    for (let i = n; i > 0; i--) {
      arr.push(i);
    }
    return arr;
  }


