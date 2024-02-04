heroes = ["thor", "hulk", "batman", "shaktiman","iron man"];
//for loop
for(let i=0; i<heroes.length; i++)
console.log(heroes[i]);
cities = ["kanpur", "jaipur", "lucknow", "gurgaon", "noida"];
//for-of loop
for(let city of cities)
console.log(city);

//Task1: find the average of marks of students
marks = [85,97,44,37,76,60];
let sum =0;
//let c=0;
for(let i of marks){
    sum += i;
   //s c++;
}
//console.log("Average = ",sum/c);  OR
let avg = sum/marks.length;
console.log(`Average = ${avg}`);

//Task2: calculate disounted price after 10% deduction
price = [250,645,300,900,50];
let newPrice =0;
let i=0;
for(let val of price){
    console.log(`original price at index ${i} = ${val}`);
    newPrice = val - (10/100)*val;
    console.log(`discounted price at index ${i} = ${newPrice}`);
    i++;
}

//dynamic arrays
//push, pop, shift, unshift make changes in the original array.
//Hence, array is mutable unlike strings
let fruits = ["mango", "litchi", "apple", "banana", "guava"];
console.log(fruits);
console.log(fruits.toString());
fruits.push("orange","strawberry");
console.log(fruits.toString());
let DeletedFruit = fruits.pop();
console.log(fruits.toString());
console.log("deleted" ,DeletedFruit);

//concat(), unshift(), shift() methods
marvelHeroes = ["Iron man", "Hawkeye", "Thor"];
dcHeroes = ["Batman", "SuperMan"];
indianHeroes = ["shaktiman", "krish"];
heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);
heroes.unshift("antman");
console.log(heroes);
let rm = heroes.shift();
console.log(heroes);
console.log("removed hero", rm);

//slice() & splice() functions
console.log(heroes.slice(1,4));   //ennd index-1
//using splice for different functions
let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num);
//to replace elements
num.splice(2,2,101,102);
console.log(num);
//to add elements
num.splice(2,0,102);
console.log(num);
//to delete elements
num.splice(3,1);
console.log(num);
console.log(num.splice(4));   //acts like slice() function

//practice test
companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies.toString);
companies.shift();
console.log(companies.toString);
companies.splice(2,1,"Ola");
console.log(companies.toString);
companies.push("Amazon");
console.log(companies.toString);