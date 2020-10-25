function verifyAge(){
    age = prompt('Insert your age:');
    console.log(typeof(age));
    if( age < 18){
        yearsLeft = 18-age;
        document.getElementById('text').innerHTML = "wait " + yearsLeft + " years";
    }else{
        document.getElementById('text').innerHTML = 'You are allowed';
        
    }
}

function showSeason(){
    let monthName = document.getElementById('sname').value;
    switch (monthName) {
        case 'September':
            season = 'Autumn';
            break;
        case 'December':
            season = 'Winter';
            break;
        default:
            season = 'not a month'
            break;
    }
    document.getElementById('season-name').innerHTML = season ;
}


let a = 3;
let b = 2;

a > b ? console.log('A is grather') : console.log('b is grather');

let num = 3;
num % 2 === 0 ? console.log('even') : console.log('odd'); 

let score = 70;

let selectGrade = score => {
    let grade = '';
    if (score > 90) {
        grade = 'A'
    } else if (score >= 80) {
        grade = 'B'
    } else if (score >= 70) {
        grade = 'C'
    } else if (score >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade;
}

console.log(selectGrade(score));

