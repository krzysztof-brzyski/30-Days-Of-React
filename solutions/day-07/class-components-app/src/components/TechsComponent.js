import React from 'react'

class Techs extends React.Component{
    render(){
        const techs = this.props.techs
        const mappedTechs = techs.map(tech => <li key={tech}>{tech}</li>)

        return mappedTechs
    }
}

export default Techs