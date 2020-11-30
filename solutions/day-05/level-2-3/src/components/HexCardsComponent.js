import Card from './Card';


const hexCardContianerStyles = {
    width:500,
    margin: '15px auto',
}

const HexCardsComponent = (props) => {
    const colors = props.colors
    const listOfColors = colors.map( (color, i) => { 
        let number = {number: color, type: 'hex'}
        return (<Card number={number} />)
    })
    return <div style={hexCardContianerStyles}>{listOfColors}</div>
}

export default HexCardsComponent