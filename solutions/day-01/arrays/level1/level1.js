const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  
// Declare an empty array;
// let array = [];


//   Declare an array with more than 5 number of elements
// let array = Array(8).fill('');
// console.log(array);


//   Find the length of your array
// let array = Array(8).fill('');
// console.log(array.length);

//   Get the first item, the middle item and the last item of the array
// let array = [1,2,3,"im' the middle",5,6,7,8];
// let firstElement = array[0];
// let middleElement = array[(array.length/2)-1];
// let lastElement = array[array.length-1];
// console.log('first: ' + firstElement + ' middle: ' + middleElement + ' last: ' + lastElement);


//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedDataTypes = [];
// mixedDataTypes.push('sss');
// mixedDataTypes.push(12);
// mixedDataTypes.unshift({name: 'Piotr'});
// mixedDataTypes.unshift([1,2,3]);
// mixedDataTypes.push('aaa');
// mixedDataTypes.push(44);
// console.log(mixedDataTypes.length);


// //   1 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const itCompanies = companies.split(", ");
// //   2 Print the array using console.log()
// console.log(itCompanies);
// //   3 Print the number of companies in the array
// console.log(itCompanies.length);
// //   4 Print the first company, middle and last company
// console.log('First: ' + itCompanies[0] + ' middle: ' + itCompanies[(itCompanies.length - 1 ) / 2] + ' last: ' + itCompanies[itCompanies.length - 1]);
// //   5 Print out each company
// console.log(itCompanies.join(', '));
// //   6 Change each company name to uppercase one by one and print them out
// console.log(itCompanies.map((e) => e.toUpperCase() ));
// //   7 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.join(', ') + ' are big Companies');
// //   8 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// companyName = 'Oracle' 
// findCompany = itCompanies.indexOf(companyName) != -1 ? itCompanies[itCompanies.indexOf(companyName)] : 'not found';
// console.log(findCompany);
// //   9 Filter out companies which have more than one 'o' without the filter method
// function filterO(e){
//   countO = 0;
//   for (let i = 0; i < e.length; i++){
//     if (countO > 1 ) break;
//     if(e[i] == "o") countO++;
//   }
//   if (countO > 1) return(e)
// }
// multipleOArray = itCompanies.filter(filterO)
// console.log(multipleOArray);
// //   10 Sort the array using sort() method
// console.log(itCompanies.sort());
// //   11 Reverse the array using reverse() method
// console.log(itCompanies.reverse());
// //   12 Slice out the first 3 companies from the array
// console.log(itCompanies.slice(3));
// //   13 Slice out the last 3 companies from the array
// console.log(itCompanies.slice(0,itCompanies.length-3));
// //   14 Slice out the middle IT company or companies from the array
// let arrLength = itCompanies.length;
// let middleIndexes = [];
// if(arrLength % 2 === 0 ){
//   middleIndexes.push((itCompanies.length/2)-1,itCompanies.length/2);
//   itCompanies.splice(middleIndexes[0],2);
// }else{
//   middleIndexes.push(Math.floor(itCompanies.length/2));
//   itCompanies.splice(middleIndexes[0],1);
// }
// console.log(itCompanies);
// //   15 Remove the first IT company from the array
// itCompanies.shift()
// console.log(itCompanies);
// //   16 Remove the middle IT company or companies from the array
// itCompanies.splice(Math.floor(itCompanies.length/2),1);
// console.log(itCompanies);
// //   17 Remove the last IT company from the array
// itCompanies.pop();
// console.log(itCompanies);
//   18 Remove all IT companies
// itCompanies.splice(0,itCompanies.length);
// console.log(itCompanies);