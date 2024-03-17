// Tests for equality and inequality with strings
let str1: string = 'hello';
let str2: string = 'world';

console.log("Equality test with strings:");
console.log(str1 == str2); // False
console.log("Inequality test with strings:");
console.log(str1 != str2); // True

// Tests using the lower case function
let mixed1Case: string = 'HelloWorld';
//Here we check mixedCase.tolowerCase()=="HelloWorld"
console.log(`is mixedCase.toLowerCase() == "HelloWorld"`,mixed1Case.toLowerCase() == "HelloWorld"); // false
console.log(`is mixedCase.toLowerCase() == "helloworld"`,mixed1Case.toLowerCase()=="helloworld");//true


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log(`Numerical tests : num1 : ${num1} , num2 : ${num2}`);
console.log(num1 == num2); // False
console.log(num1 != num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let x : number = 10;
let y : number = 20;
let z : number = 30;

console.log("Logical AND test:");
console.log(x < y && y < z); // True
console.log("Logical OR test:");
console.log(x > y || y > z); // False

// Test whether an item is in an array
let numbers: number[] = [1, 2, 3, 4, 5];

if (!numbers.indexOf(4)) {
    console.log("The number 4 is incuded in numbers list");
}
if (!numbers.indexOf(9)) {
    console.log("The number 9 is not incuded in numbers list");
}
