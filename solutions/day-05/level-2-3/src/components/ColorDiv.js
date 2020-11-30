const colorDivStyles = (color) => {
    
    const style={
        padding: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'bold',
        color: '#fff',
        borderRadius: 5,
        width:'80%',
        margin:'2rem 10%',
    }
    style.background = color

    return style;
}



const ColorDiv = (props) => (<div style={colorDivStyles(props.color)}>{props.color}</div>)


export default ColorDiv;