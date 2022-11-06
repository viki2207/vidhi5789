// array is collection of similar type content.
// 10,20,30,40,50,60,70,80,90,100
var a = [10, 2, 351, -42, -53];

//array position reference will start at 0.
// the last index : size-1

for (const i of a) {
  console.log(i);
}
// let is used to declare the variable
// var and let and const diff.

for (let i = 0; i < a.length; i++) {
  let element = a[i];
  if (a[i] % 2 == 0) {
    console.log(element);
  }
}

// print the even numbers from array.
// you have to declare 2 arrays : 1st array hold the numbers and 2nd array hold the factorials .
// [1,2,3,4,5] 2nd expected : [1,2,6,24,120]
var i = 0;
var arr = [11, 121, 45, 87, 99, 67, 54, 34, 97];
var ar2 = [];

console.log("Palindrom items are :");

for (i = 0; i < arr.length; i++) {
  var number = arr[i];
  var reversal = 0;
  var digit = 0;
  while (number > 0) {
    digit = number % 10;

    reversal = reversal * 10 + digit;

    number = Math.floor(number / 10);
  }
  if (reversal == arr[i]) {
    ar2 += [arr[i] + ","];
  }
}

if (ar2.length != 0) {
  ar2 = ar2.slice(0, -1);
  console.log(ar2);
}
// declare an array with 10 numbers and find out prime numbers in the array.
//they only divide by them selves and one
//each number has a more than one factors than they are not prime number

var arr3 = [
  -1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20,
];
var arr4 = [];
console.log("Prime numbers are:");

for (let j = 2; j < arr3.length; j++) {
  if (arr3 % j == 0) {
  }
  arr4 += [arr3[j] + " "];
}
console.log(arr4); //[ 2, 3, 5, 7, 11, 13, 17, 19]

// declare an array with 10 numbers and find out strong numbers in the array.

var temp, reminder, k, c, factorials;
var arr5 = [1, 2, 9, 145, 452];
var arr6 = [];
for (k = 0; k < arr5.length; k++) {
  var sum = 0;
  factorials = 1;
  c = 1;
  temp = arr5[k]; // 145
  reminder = temp % 10; //145%10 = 14.5
  while (c <= reminder) {
    //(1 <= 14.5)
    factorials = factorials * c;
    c++;
  }
  sum = sum + factorials;
  temp = temp / 10;
  console.log(sum);
  if (arr5[k] == sum) {
    arr6 += [arr5[k] + ","];
  }
}
console.log(arr6 + "is a strong number");
