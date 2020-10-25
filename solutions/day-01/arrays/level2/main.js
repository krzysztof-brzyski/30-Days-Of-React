
const { indexOf, find } = require("./countries");
const countries = require("./countries");
const webTechs = require("./web_techs")

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// words = text.replace(/[.,]/g,"");
// words = words.split(" ");
// // console.log(text);
// console.log(words);
// console.log(words.length);


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     add 'Meat' in the beginning of your shopping cart if it has not been already added
//     add Sugar at the end of you shopping cart if it has not been already added
//     remove 'Honey' if you are allergic to honey
//     modify Tea to 'Green Tea'
//////////////////////////////////////////////////////
// shoppingCart.unshift('Meat');

// function addItem(item){
//     shoppingCart.indexOf(item) !== -1 ? console.log(`${item} already added`) : shoppingCart.push(item);
// }

// addItem('Sugar');
// addItem('Sugar');
// addItem('Sugar');
// console.log(shoppingCart);


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// In countries array check if 'Ethiopia' exists in the array 
// if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
//////////////////////////////////////////////////////
// let name = 'Canada';
// let countryIndex = countries.findCountry(name);

// countryIndex !== -1 ? countries.countryToUppercase(countryIndex) : countries.addCountry(name);
// console.log(countries.countries);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// In the webTechs array check if Sass exists in the array 
// and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
//////////////////////////////////////////////////////
// let name = 'Sass';
// let techIndex = webTechs.findTech('Sass');

// techIndex !== -1 ? console.log(`${name} is a CSS preprocessor`) : webTechs.setTech(name);
// console.log(webTechs.webTechs);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// In the webTechs array check if Sass exists in the array 
// and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Concatenate the following two variables and store it in a fullStack variable.
//////////////////////////////////////////////////////
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)








