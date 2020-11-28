import Input from './Input'


const formStyles = {
    background: 'lightblue',
    textAlign: 'center',
    padding: 25,
}

const Form = () => (
    <div style={formStyles}>
        <h2>SUBSCRIBE</h2>
        <h3> Sing up your e-amil</h3>
        <form>
            <div>
                <Input name="firstName" placeholder="First Name"/>
                <Input name="lastName" placeholder="Last Name"/>
                <Input name="email" placeholder="E-mail"/>
            </div>
            <div>
                <button type="submit" style={
                    {backgroundColor: 'red', 
                    border: 'none', 
                    color: '#fff', 
                    padding: 15, 
                    borderRadius:5}
                }>
                    SUBMIT
                </button>
            </div>
        </form>
    </div>
)


export default Form