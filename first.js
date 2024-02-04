//FIRST LINE OF CODE<INTRO>
//print something on console of browser
console.log("My name is Bhavesh Shastri");

//VARIABLES IN JS

//var keyword means our variable can be re-declared and updated.
var fullName = "Bhavesh Shastri"
//let keyword means our variable can only be updated.
let age= 18;
//var keyword means our variable can neither be re-declared nor be updated.
profession = "a student"
console.log("My name is "+fullName+". I am "+age+"years old. I am "+profession+".");
fullName = "Tony Stark";
age = 56;
profession = "an actor";
console.log("My name is "+fullName+". I am "+age+"years old. I am a "+profession+".");
fullName = "Rudeus Greyrat";
age = 21;
profession = "a character";
console.log("My name is "+fullName+". I am "+age+"years old. I am a "+profession+".");
//js is Dynamically Typed. No need to define data type of variables.
//special types
x = null;
y = undefined;
w = BigInt("542467");    //to store large values
z = Symbol("Namaste");   //to store a new symbol object

//NonPrimitive Data type Declaration
const human = {
    fullName : "Bhavesh Junior",
    age :8,
    category : "children",
    school : "SHS",
    bloodGroup : "A+"
};
//Here "human" is an object while category, school, etc are keys with certain values after colon.
//or, object is a collection of keys.
console.log(human["bloodGroup"]);
human.age = human["age"] +1;
console.log(human.age);

//Task !: to create a const product object of a pen from amazon website.
const product = {
    prodThumbnail : "image file",
    prodName : "Parker Jotter Standard CT Ball Pen(Black)",
    prodrating : 4,   //out of 5 stars
    prodNumberOfReviews : 7002,
    dealOfTheDay : true,
    prodPrice : 270,    //INR
    prodMRP : 285,
    prodDiscount : 5     //percent off
};
console.log(product);

//Task 2: to create profile object containing keys used in social media apps.
const profile = {
    thumbnail : "pfp",
    userName : "Bhavesh_151515",
    isVerified : false,
    isFollow : true,
    message : "button",
    numPosts : 7,
    numFollowers : 596000,
    numFollowing : 7,
    fullName : "Bhavesh Shastri",
    threadAccount : "@bhaveshshastri",
    bio : "college student",
};