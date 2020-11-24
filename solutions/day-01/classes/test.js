class Person{
    constructor(
        firstName = 'Kaa', 
        lastName = 'Bee',
        age = 100, 
        country = 'Poland', 
        city = 'Warsaw'
        ){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName;
    }
    get getScore(){
        return this.score;
    }   
    get getSkills(){
        return this.skills;
    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    getPersonInfo(){
        let fullName = this.getFullName();
        let skills = 
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length-1).join(',') +
            ` and ${this.skills[this.skills.length-1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info;
    }
}

const person1 = new Person();
const person2 = new Person('Kaa','Bee',33,'Finland','Helsinki');
person1.setScore = 3;
person1.setScore = 2;
person1.setSkill = 'Minning';
person1.setSkill = 'Washing'
console.log(person1.getScore);
console.log(person1.getSkills);
console.log(person1.getPersonInfo());