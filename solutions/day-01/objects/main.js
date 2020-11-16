// // LEVEL 1
// let dog = {
//     name: '',
//     legs: '',
//     color: '',
//     age: 5,
//     bark: function(){return 'woof woof'}

// }
// dog.name = 'Burek'
// console.log(dog.bark());



// dog.breed = '';
// dog.getDogInfo = function(){
//     return `My name is ${this.name}. My age is: ${this.age}`;
// }

// console.log(Object.keys(dog));
// console.log(dog.getDogInfo());



// LEVEL 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}


// // LEVEL 2 - 1. Find the person who has many skills in the users object.
// let manySkills = 0;
// let manySkillsPerson = '';
// for (const [key,value] of Object.entries(users)){
//     if(manySkills < value.skills.length){
//         manySkills = value.skills.length;
//         manySkillsPerson = key;
//     }

//     console.log(`${key}: ${value.skills.length}`);
// }
// console.log(`${manySkillsPerson}: has ${manySkills} skills`);


// // LEVEL 2 - 2 Count logged in users,
// count users having greater than equal to 50 points from the following object.
// loggedInUsers = 0;
// for(const [key, value] of Object.entries(users)){
//     if(value.isLoggedIn === true) loggedInUsers++;
// }
// console.log(loggedInUsers);

// UsersWithMoreThan50Points = 0;
// for(const [key, value] of Object.entries(users)){
//     if(value.points >= 50) UsersWithMoreThan50Points++;
// }
// console.log(UsersWithMoreThan50Points);


// // LEVEL 2 - 3 Find people who are MERN stack developer from the users object
// let peopleWithMERN = [];
// MERNSkills= ['MongoDB', 'Express', 'React', 'Node']
// for(const[key,value] of Object.entries(users)){
//   hasMERNSkills = [0,0,0,0];
//   for (const skill of value.skills) {
//     if(skill === MERNSkills[0]) hasMERNSkills[0] = 1;
//     if(skill === MERNSkills[1]) hasMERNSkills[1] = 1;
//     if(skill === MERNSkills[2]) hasMERNSkills[2] = 1;
//     if(skill === MERNSkills[3]) hasMERNSkills[3] = 1;
//   }
//   if(hasMERNSkills[0] === 1 &&
//     hasMERNSkills[1] === 1 &&
//     hasMERNSkills[2] === 1 &&
//     hasMERNSkills[3] === 1 ){
//       peopleWithMERN.push(key);
//     }
// }
// console.log(peopleWithMERN);


// // LEVEL 2 - 4 Set your name in the users object without modifying the original users object
// // LEVEL 2 - 5 Get all keys or properties of users object
// // LEVEL 2 - 6 Get all the values of users object
// const newUsers  = {}
// Object.assign(newUsers,users);
// newUsers.Krzysztof = {
//   email:"k@k.de"
// }

// for (const [key, value] of Object.entries(newUsers)) {
//   console.log(key);
// }
// for (const [key,value] of Object.entries(newUsers)) {
//   console.log(key);
//   console.log(` ${Object.keys(value)}: ${Object.values(value)}`);
// }
