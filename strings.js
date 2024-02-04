//Strings
let str = "Pneumonoultramicroscopicsilivolcanoconiosis";
console.log(str[4]);

//Template Literals Strings: a special type of embedded string
let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);
//eg of a problem solved using this feature
let obj ={
    name: "pen",
    price: 10,
};
console.log("Price of the",obj.name,"is",obj.price,"rupees");
//this can be made more efficient using the following method
output = `Price of the ${obj.name} is ${obj.price} rupees`; 
//${}: this phenomenon of adding keys in betweeen string text is called "String Interpolation"
console.log(output,"\t\t//using Template Literals");
//hence, template literal closely resembles printf function in java

//Escape characters: \t , \n, 
//their length is counted as "1" like a single character
let string = "Apna\tCollege";   //length  = 13
console.log(string.length);   //but, ACTUAL LENGTH = 12

//Strings in JS are 'immutable' which means original string ccannot be changed
//if any changes occur, a new String is automatically created
let st = "BS";
newSt = st.toLowerCase();
console.log(st);
console.log(newSt);

//Task: social media handling
UserName = prompt("ENTER USER NAME");
console.log("@",UserName);