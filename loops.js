//FOR LOOPS
//to print sum of 1st 5 natural nos
let sum=0;
for(let i=1;i<6;i++){
    sum += i;
    nums = {i};
}
console.log("sum of nos ",nums," = ",sum);

//while loops
let i=1;
while(i<=10){
    console.log("tick-tick ",i," !");
    i++;
}
console.log("BOOM !!");

//do-while loop
let s=0,j=0;
do{
    j++;
    s += j;
}while(j<=5);  //will find sum till natural no 6
console.log("sum = ",s);

//for-of loop : for loop over strings or arrays
// it automates initialization, updation and stopping condition
//Syntax : for(let val of strVal) {#task}
let str = "StringVariable";
size = 0;
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log(size);

//for -in loop: to use loop on objects
//Syntax : for(let key in objVar){#task}
let student = {
    name:"Bhavesh",
    cgpa:8.8,
    RollNo:31,
    age:18,
    isPass: true,
};
for(let key in student){
    console.log("key= ",key,"\t\tvalue= ",student[key]);
}

//Task: to print all even nos from 0-100
for(let i=0; i<=100; i+=2){
    console.log("num= ", i);
}

//task: to generate a game no and ask user to guess the no until correct
gameNumber = 25;
do{
    input = prompt("Guess the number");
}while(input!=gameNumber);
console.log("yay!you won the game!", gameNumber);