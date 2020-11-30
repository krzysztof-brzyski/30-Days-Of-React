import Card from './Card'

const numbersWithParameters = []

const isPrime = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
    }

function defineNumberType(number){
    let numberType = ''
    if(isPrime(number)){
        numberType = 'prime'
    }else{
        number % 2 === 0 ? numberType = 'even' : numberType = 'odd'
    }
    return {
        number: number,
        type: numberType
    }

    
}


const cardContianerStyles = {
    width:500,
    margin: '0 auto',
}


const CardsContainer = ({data}) => {
    data.map(number => numbersWithParameters.push(defineNumberType(number)));
    return (
        <div style={cardContianerStyles}>
            {numbersWithParameters.map(number => <Card number = {number} />)}
        </div>
    )
}

export default CardsContainer;