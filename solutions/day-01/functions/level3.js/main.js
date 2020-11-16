// // 1. Declare a function name userIdGeneratedByUser. 
// // It doesn’t take any parameter but it takes two inputs using prompt().
// //  One of the input is the number of characters 
// //  and the second input is the number of ids 
// //  which are supposed to be generated.
// function userIdGeneratedByUser(){
//     let noOfCharacters = prompt("Number of characters");
//     let noOfIds = prompt("Nuber of ids");

//     let result = [];

//     for(let i = 0; i < noOfIds; i++){
//         console.log(i);
//         result.push(generateId(noOfCharacters));
//     }

//     console.log(result);
// }

// function generateId(length){
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let result = '';
//     for(let i = 0; i < length; i++){
//         result += characters[Math.floor(Math.random() * charactersLength)];
//     }
//     return result;
// }

// userIdGeneratedByUser();



// // 2. Write a function generateColors which can generate any number of hexa or rgb colors.
// // function generateColors(type, numberOfColors){
//     let result = [];

//     if(type === 'hexa'){
//         const characters = 'abcdef0123456789';
//         const charactersLength = characters.length;
    
//         for(let i = 0; i < numberOfColors; i++){
//             color = '#';
//             for(let i = 0; i < 6; i++){
//                 color += characters[Math.floor(Math.random()*charactersLength)];
//                 if (i === 5) {
//                     result.push(color);
//                     color = '#';
//                 }
//             }
            
//         }
//     }else if(type === 'rgb'){
//         for(let i = 0; i < numberOfColors; i++){
//             color = 'rgb(';
//             for(let i = 0; i < 3; i++){
//                 color += Math.floor(Math.random() * 255);
//                 if(i !== 2){
//                     color += ', ';
//                 }else{
//                     color += ')';
//                     result.push(color);
//                     color = 'rgb(';
//                 }
//             }

            
//         }
//     }else{
//         return 'not a color';
//     }
//     return result;
// }
// // console.log(generateColors('hexa', 2)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// // console.log(generateColors('hexa', 1)) // '#b334ef'
// // console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
//  console.log(generateColors('rgb', 3)) // 'rgb(33,79, 176)'



// // 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// // someArray = [1,2,3,4,5,6,7,8,9,10];
// // function shuffleArray(arr){
// //     const arrayLength = arr.length;
    
//     arr.forEach((e,i) => {
//         let newPosition = Math.floor(Math.random() * arrayLength);
//         let deletedElement = arr.splice(i,1);
//         arr.splice(newPosition, 0,deletedElement[0]);
//     });
//     console.log(arr);
//     return arr;
// }

// console.log(shuffleArray(someArray));



// // 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// function factorial(number){
//     let result = 1; 
//     for(let i = 1; i <= number; i++){
//         result = result*i;
//         console.log(i);
//     }
//     return result;
// }

// console.log(factorial(3));



// // 6. Write a function called average, it takes an array parameter and returns the average of the items. 
// // Check if all the array items are number types. If not give return reasonable feedback.
// function average(arr){
//     let sum = 0;
//     let notNumbersIndexes = [];
//     arr.forEach((e,i) => {
//         typeof e == 'number' ? sum += e  : notNumbersIndexes.push(i);    
//     });
//     noOfNumbers = arr.length - notNumbersIndexes.length;
//     let result = [sum / noOfNumbers];
//     if(notNumbersIndexes != []) result.push(`Array has elements that not are numbers`);
//     return result;
// }
// someArray = [1,2,3,4,'aaa',3]
// console.log(average(someArray));
