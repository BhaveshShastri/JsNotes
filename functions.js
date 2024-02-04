function myFunction(){
    console.log("U r doing gr8");
    console.log([1, 2, 3, 4].push(5).toString());
}
myFunction();

function sum(a,b){
    console.log("Before Return");
    return a+b;
    console.log("Before Return");                //will not be read after return statement
}
let val = sum(5,6);
console.log(val);

//arrow Functions : compact way of writing a function
//Synatx : const function = (parameters) => {function task}
const arrowSum = (a,b) => {
    console.log("Sum of Arrow function = ");
    console.log(a+b)};
arrowSum(3,8);

const printHello = () => {
    console.log("hello");
}
printHello();

//Task 1(a): find the number of vowels in a string
function countVowels(inputString) {
let count = 0;
for(const char of inputString){
    console.log(char);
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        count++;
        console.log("vowel number", count);
    }
}
console.log("Number of vowels = ",count);
}
let inputString = prompt("Enter a string");
countVowels(inputString);

//Task 1(b): perform task (a) using arrow function
const countVow = (inputString) => {
    let count = 0;
for(const char of inputString){
    console.log(char);
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        count++;
        console.log("vowel number", count);
    }
}
console.log("Number of vowels = ",count);
return count;
}

//Callback functions: function passed as an argument to another function.
function func(num){
    num = prompt("enter a number");
    return num;
}
function abc(func){
    return func;
}
//forEach loops in arrays: modifies value at each index of array
//Syntax: arr.ForEach(callBackFunction)
//Eg. arr.ForEach(val(item) ,idx(position) ,array) => {console.log(val)});
let arr = [1,2,3,4,5];
console.log("(ForEach loop)Numbers of array are:");
arr.forEach((val) => {
    console.log(val);
}) 

let arr1 = ["pune", "mUmBai", "delHi", "BanGalOrE"];
arr1.forEach((val, idx, arr1) => {
    console.log(val.toUpperCase(), idx, arr1);
})
//method is a bounded function attached to a specific data type  
//What are higher order functions/methods ?
//functions that either return another function as output or take it as parameter

//Task 3: retuen the square of an array usinf ForEach loop
let nums = [1,2,3,4,5,6];
nums.forEach((val) => {
    console.log(val*val);     //num*num = num**2
})
//another method to declare the same function
console.log("Another way to use the same function: ")
let nums1 = [34,65,23,78,23,98];
function calcSquare(num) {
    console.log(num*num);
}
nums1.forEach(calcSquare);