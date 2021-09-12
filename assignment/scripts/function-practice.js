console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('helloName - Should say "Hello Jack!""', helloName('Jack'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
  return firstNumber + secondNumber;
}

console.log('addNumbers - Should say 3', addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}

console.log('multiplyThree - Should say 24', multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ) {
    return true;
  } else if ( number <= 0 ) {
    return false;
  }
 }

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let getLastTestArray = [2, 4, 5, 6, 8, 10];

function getLast( arr ) {
  if (arr.length >= 1) {
    return getLastTestArray[getLastTestArray.length-1];
  } else {
    return 'Undefined';
  }
}

console.log('getLast - should be 10', (getLast(getLastTestArray)));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let findTestArray = [7, 4, 6, 8];

function find( value, array ) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    } else if (i === array.length -1) {
      return false;
    }
  }
}

console.log('find - should be false', find(2, findTestArray));
console.log('find - should be true', find(6, findTestArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    if (string[0] === letter) {
      return true;
    } else if (string[0] != letter) {
        return false;
    }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items
let sumAllArray = [1, 2, 3, 4];

function sumAll( array ) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  return sum;
}

console.log('sumAll - should be 10:', sumAll(sumAllArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let mixedArray = [-1, 2, -3, 4, -5, 6];
let negativeArray = [-1, -4. -5, -32];
let justPosArray = []

function justPos ( array ) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      justPosArray.push(array[i]);
    } else if (i === array.length - 1) {
      return [];
    }
  }
  return justPosArray;
}

// I hope it's not, but is line 126 the wrong thing to do?

console.log('justPos - should be 2, 4, 6:', justPos(mixedArray));
console.log('justPos - should be empty:', justPos(negativeArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// I just copy pasted from the website as Edabit won't let me test it on their website w/o paying for it.
// Also, I cannot figure out how to make this function work with negatives.

// Add up the Numbers from a Single Number:
// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10
// because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
	 let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log('addUp - should be 15:', addUp(5));
