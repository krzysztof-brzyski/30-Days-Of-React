const countries = require("./countries");

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, ];
// Sort the array and find the min and max age

ages.sort();
// console.log(ages);
// console.log(ages.length);
// console.log('min age is: ' + ages[0] + ' and maximum age is: ' + ages[ages.length-1]);

// // Find the median age(one middle item or two middle items divided by two)
// if(ages.length % 2 === 0){
//     let firstNumber = ages[ages.length / 2];
//     let secondNumber = ages[(ages.length / 2) -1];
//     let median = (firstNumber + secondNumber) / 2;
//     console.log(median);
// }else{
//     let median = ages[(ages.length-1) / 2];
//     console.log(median);
// }

// // Find the average age(all items divided by number of items)
// function sumAges(arr){
//     sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let agesSum = sumAges(ages);
// let averageAge = Math.round(agesSum / ages.length);
// console.log(averageAge);

// // Find the range of the ages(max minus min)
// // Compare the value of (min - average) and (max - average), use abs() method
// let agesMax = ages[ages.length-1];
// let agesMin = ages[0];
// let agesAverage = agesMax - agesMin;
// console.log(Math.abs(agesMin-agesAverage));
// console.log(Math.abs(agesMax-agesAverage));



/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
// Slice the first ten countries from the countries array

let countiresList = countries.getCountries();
// console.log(countiresList);

// Find the middle country(ies) in the countries array
function findMiddleElements(arr){
    if((arr.length % 2) === 0 ){
        let setMiddle = arr.length / 2;
        console.log('middle element are: ' + arr[(arr.length / 2)-1] + ' ' + arr[(arr.length / 2)]);
    }else{
        console.log('middle element is: ' + arr[Math.floor(arr.length / 2)])
    }
}

findMiddleElements(countiresList);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
