const cardStyles = (type,number) => {
    
    const style={
        width: 100,
        height: 100,
        textAlign: 'center',
        display: 'inline-block',
        background: 'red'
    }
    if(type !== 'prime'){
        type === 'even' ? style.background = 'blue' : type === 'odd' ? style.background = 'green' : style.background = number
    }

    return style;
}


const Card = ({
    number:{
        number,
        type
    }}) => {
    return(
        <div style={cardStyles(type,number)} key={number}>
            {number} {type}
        </div>
    )
}

export default Card