
const inputStyles = {
    padding: '10px 10px',
    borderRadius: 5,
    border: 'none',
    margin: 10,
    fontSize: '1.4em',
}
const Input = (props) => {
    let {name, placeholder } = props;
    return(
    <input style={inputStyles} type="text" id={name} name={name} placeholder={placeholder}></input>
)}

export default Input