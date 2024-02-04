//Window object: represents open window in a browser. It is a browser's object(not JS's) & is
//               automatically created be the browser. It is a global object with lot of 
//               properties and methods.
console.log("window");
console.log("hello1 !");
window.console.log("hello2!");  //all code is a part of window object

//Document Object Model(DOM): object automatically created to access html file via js 
//window contains html tags like head, body, div,etc
console.dir(window);