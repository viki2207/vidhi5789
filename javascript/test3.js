// printing numbers from 1 to 10.
// whenever we need to repeat the steps / process : in that case we should use the loops
// 1. while : entry control : we don't know the number of times loop should be executed
// we don't have the fixed criteria for condition.
// 2. for : entry control : steps/ increment : or if you know about end limit  preferred
// for arrays (should be traversal order from 0 to size-1)
// 3. do while. exit control : is not the preferred approach in good practices.

//factorial number
//5!
//5*4*3*2*1
// 120
// var result = 1;
// for (var i = 1; i <= 5; i++) {
//   result = result * i;
//   console.log(result);
// }

// for (var i = 5; i >= 1; i--) {
//   if (i == 0 || i == 1) {
//     result = result * i;
//   }
//   console.log(result);
// }

//strong number
//145 : strong number
// 1! + 5!+ 4!
//1+ 120+24
//145
//if sum of the factorial : original number then that number is called as strong number and

// var fact = 145;
// for (var i = 1; i <= Number; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// var number = 145;

// var digit = 0;
// var factorial = 1;
// var sum = 0;
// while (number > 0) {
//   digit = number % 10;
//   //
//   for (var i = 1; i <= digit; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
//   sum += factorial; // sum = sum + factorial
//   factorial = 1;
//   number = Math.floor(number / 10);
// }

var number = 145; // 145
//1! + 4! + 5! = 145 // that time sum  or original number is same its a strong number otherwise not like 123 = 1! + 2!+ 3! = 9 its not same as a original number is a not a strong number
var temp = number;
var digit = 0;
var factorial = 1;
var sum = 0;
while (number > 0) {
  // taking mod to get the last digit
  digit = number % 10;
  //calculating the factorial fo the digit
  for (var i = 1; i <= digit; i++) {
    factorial = factorial * i;
  }
  // printing the factorial
  console.log(factorial);
  // adding the factorial value to the sum later to check the number is strong or not.
  sum += factorial; // sum = sum + factorial
  // reseting the factorial to 1 to get a support to calculate the factorial of the next digit.

  factorial = 1;
  // dividing the number by 10 to remove the last digit and applying floor function to remove the fraction from it.

  number = Math.floor(number / 10);
}
console.log(number);
console.log(sum);
if (sum == temp) {
  console.log("number is strong");
} else {
  console.log("Number is not strong");
}

//palindrom number:
// 121: original numeber and reverse number both are same

// palindrome number : original number and reversal number should be same.
// 1. we have to form the reversal number.
// do we need to separate the digits and form the number.
// can we take a mod ?
// digit to form the number.

// then compare the original number with reversal number.

var number = 12345;
var digit = 0;
var counter = 0;
var reversal = 0;
// digit to hold the number.

console.log("digit value =" + digit);

while (number > 0) {
  // do we need to separate the digits and form the number

  digit = number % 10;

  reversal = reversal * 10 + digit;
  console.log(digit);
  number = Math.floor(number / 10);

  //       Math.floor(0.1)
  // 0

  //console.log(number);
  counter++;
}

console.log("final number:" + reversal);
console.log("no of digits in a number=" + counter);
if (reversal == number) {
  console.log("Number is palindrom");
} else {
  console.log("Number is not palindrom");
}
