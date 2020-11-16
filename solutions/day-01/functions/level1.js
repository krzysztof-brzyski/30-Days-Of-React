// 1. Declare a function fullName and it takes firstName, lastName 
//    as a parameter and it returns your full - name.
// function fullName(fName,lName){
//     return `Your name is ${fName} ${lName}`;
// }
// console.log(fullNameArrow('xxx','ccc'));

// const fullNameArrow = (fName, lName) => `Your name is ${fName} ${lName}`;
// console.log(fullName('aaa', 'bbb'));


// 2. Declare a function addNumbers and it takes two two parameters 
//    and it returns sum.
// const addNumbers = (a,b) => a+b;
// console.log(addNumbers(3,4));


// 3. Area of a circle is calculated as follows: area = π * r * r. 
//    Write a function which calculates _areaOfCircle
// const circleArea = r => 3.14 * r * r;
// console.log(circleArea(2));


// 4. Temperature in oC can be converted to oF using this formula: 
//    oF = (oC x 9/5) + 32. Write a function which convert oC to oF 
//    convertCelciusToFahrenheit.
// const convertCelciusToFahrenheit = (temparature) => (temparature * 9 / 5) + 32;
// console.log(convertCelciusToFahrenheit(30));


// 5. Body mass index(BMI) is calculated as follows: 
//    bmi = weight in Kg / (height x height) in m2. 
//    Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//         The same groups apply to both men and women.
//         Underweight: BMI is less than 18.5
//         Normal weight: BMI is 18.5 to 24.9
//         Overweight: BMI is 25 to 29.9
//         Obese: BMI is 30 or more
// function calculateBMI(weight, height){
//     let BMI = weight / (height * weight);
//     let message = BMI;
//     if(BMI < 10){
//         message = 'ccc'
//     }
//     return message;
// }
// console.log(calculateBMI(62,172));


// 6. Write a function called checkSeason, it takes a month parameter 
//    and returns the season:Autumn, Winter, Spring or Summer.
// const checkSeason = (month) => {
//     const months = [
//         'January', 'February', 'March', 'April',
//         'May', 'June', 'July', 'August',
//         'September', 'October', 'November','December',
//     ];
//     let monthIndex = months.indexOf(month);
//     let seasonName = '';
//     monthIndex >= 0 && monthIndex < 3 ? seasonName = 'Wiosna' : 
//         monthIndex < 6 ? seasonName = 'Lato' :
//         monthIndex < 9 ? seasonName = 'Jesień' :
//         monthIndex < 12 ? seasonName = 'Zima' : 
//         seasonName = 'Not A month name'
//     return seasonName;
// }
// console.log(checkSeason('July'));