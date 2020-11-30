import './barStyle.css'

const countryStyle = {
    width: '15%',
    display: 'inline-block'
}

const populationStyle = {
    width: '5%',
    display: 'inline-block',
    textAlign: 'right'
}

const progressStyle = {
    width: '50%',
    appearance: 'none',
    height: 30,
    backgroundColor: '#fff',
    color:'green',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0.0) inset',
    marginTop: 10,
    border: 'none',
    
}


const Bar = ({country :{country, population,worldPercentage}}) => {
    return(
        <div>
            <div style={countryStyle}>{country}</div>
            <progress style={progressStyle} id="{country}" value={worldPercentage} max="100">  </progress>
            <div style={populationStyle}> {population} </div>
        </div>
    )
}

export default Bar