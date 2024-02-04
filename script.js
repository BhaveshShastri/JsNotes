//OPERATORS

//=== /!==
a = "5";
b = 5;
console.log("a==b", a==b);         //irrespective of data type
console.log("a===b", a===b);       //stricter version 
console.log("a!==b", a!==b);
b>8 ?console.log("true"):console.log("false, b is not gr8er than 8");

//user input / popups
alert("JavaScript");          //one time popup
name = prompt("hello!");
console.log(name);

//Task 3: enter a no from user and check if its a multiple of 5.
num = prompt("ENTER A NUMBER");
num%5==0?console.log(num," multiple"):console.log("not a multiple");

//Task 4: give grades to a student accordingly after taking his marks as input
marks = prompt("ENTER STUDENTS MARKS");
switch (marks) {
    case 90<=marks && marks<=100:
        console.log("GRADE A");
        break;
    case 80<=marks && marks<=89:
        console.log("GRADE B");
        break;    
    case 70<=marks && marks<=79:
        console.log("GRADE C");
        break;    
    case 60<=marks && marks<=69:
        console.log("GRADE D");
        break;
    case 50<=marks && marks<=59:
        console.log("GRADE E");
        break;
    case 0<=marks && marks<=49:
        console.log("GRADE F");
        break;
    default:
        console.log("invalid input");
};