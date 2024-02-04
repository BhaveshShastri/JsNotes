//Important array methods : 
//1.) map method : similar to forEach
//difference is that map creates a new array
//Syntax: arr.map(callBackFunc(value,index,array))
let num = [34,56,78,26,93];
num.map((val) => {
    console.log(val+2);
})
console.log("origonal array ",num);

//creating a new array using map
let num1 = num.map((val) => {
    return val;
})
console.log("original array ",num);
console.log("new array ",num1);                //only difference between map and forEach array functions

//2.) Filter method: creates a new array of elements that give true for a condition/filter
let arr = [1,2,3,4,5,6,7,8,9,10];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})
console.log("original array: ",arr);
console.log("new array: ",evenArr);

//3.) Reduce method: performs operations to reduce array to a single value.
//used to calculate sum of large nos of an array or to find average
const output = arr.reduce((res,curr) => {     //result == previous, curr == current val
    return res+curr;                          //res(iteration 2) = res(iterstion 1) + curr 
})
console.log(output);

//using reduce to find the largenst number in an array
let largest = num.reduce((res, curr) => {
    return res>curr? res:curr;         //for smallest:- prev<curr?prev:curr
})
console.log("largest num in array :", num);
console.log("IS", largest);

//Task 1: filter out the marks of 90+ students from an array
marks = [34,76,99,100,93,72,69,68,96];
let aGrade = marks.filter((score) => {
    return score>90;
})
console.log("marks of students", marks);
console.log("marks of students scoring 90+", aGrade);

//Task 2: take input from user to create an array of numbersfrom 1 to n and calculate
//        the sum and product of the elements of the array.
let n = prompt("enter a number");
let array = [];
for(let i=1; i<=n; i++){
    array[i-1] = i; 
}
console.log(array);
let sumArray = array.reduce((res,curr) => {
    return res+curr;
})
console.log("sum of array =", sumArray);
let prodArray = array.reduce((res,curr) => {
    return res*curr;
})
console.log("product of array(factorial) =", prodArray);