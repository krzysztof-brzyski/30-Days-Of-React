// // 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray(arr){
//     for (const e of arr) {
//         console.log(e);
//     }
// }
// let someArray = [1,2,3,4]
// printArray(someArray);


// // 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDateTime(){
//    let d = new Date();
//    let dFormat = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}` ;
//    return dFormat;
// }

// console.log(showDateTime());



// // 4. Declare a function name swapValues. This function swaps value of x to y.
// function swapValues(a,b){
//     let x = b;
//     let y = a; 
//     return {a,b}
// }

// console.log(swapValues(3, 4)) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4


// // 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// function reverseArray(arr){
//     let newArr = [];
//     arr.forEach((e,i) => {newArr.unshift(e);});
//     return newArr;
// }

// someArray = [1,2,3,4];
// console.log(reverseArray(someArray));


// // 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(arr){
//     let capitalizedArray = [];
//     arr.forEach(e => { capitalizedArray.push(e.toUpperCase());});
//     return capitalizedArray;
// }

// someArray = ['a','bsdaa','sadasda'];
// console.log(capitalizeArray(someArray));


// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(number){
//     let evens = 0;
//     let odds = 0;
//     for(i=0; i<=number; i++){
//         i % 2 != 0 ? evens++ : odds++;
//     }
//     return `even: ${evens} and odds: ${odds}`;
// }
// console.log(evensAndOdds(100));


// 10. Write a function which takes any number of arguments and return the sum of the arguments
// function sum(...arguments){
//     let result = 0;
//     arguments.forEach(e => result += e);
//     console.log(result);
// }

// sum(1,2,3);
// sum(1, 2, 3, 4) // -> 10

// // 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// function userIdGenerator(){
//     let result  = '';
//     let length = 7;
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const characterLength = characters.length;
//     for(i = 0; i < length; i++){
//         result += characters[Math.floor(Math.random()*characterLength)];
//     }
//     return result;
// }

// console.log(userIdGenerator());