// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. 
// The structure of the object and the output of the function is given below. 
// Try to use both a regular way and destructuring and compare the cleanness of the code. 
// If you want to compare your solution with my solution, check this link.
// function getPersonInfo(person){
//     /*
//     Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. 
//     He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. 
//     He speaks Amharic, English and a little bit of Suomi(Finnish)
//     */
//     // // 1 option
//     // let result = '';

//     // let name = `${person.firstName} ${person.lastName}`;
//     // let country = person.country;
//     // let age = person.age;
//     // let job = person.job;
//     // let skills = person.skills.join(', ');
//     // let languages = person.languages;


//     // result = `${name} lives in ${country}. He is an ${job}. He teaches ${skills}. He speak ${languages[0]}, ${languages[1]} and a little bit of ${languages[2]}`;
//     // return result;

//     // // 2 option
//     // let result = '';
//     // let {firstName: fName, lastName: lName, country, age, job, skills, languages} = person;
    
//     // result = `${fName} ${lName} lives in ${country}. He is an ${job}. He teaches ${skills.join(', ')}. He speak ${languages[0]}, ${languages[1]} and a little bit of ${languages[2]}`;

//     // return result;

// }
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   job: 'Instructor and Developer',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js',
//   ],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)'],
// }

// console.log(getPersonInfo(person));

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach(function (country, i, arr) {
  console.log(i, country.toUpperCase())
})