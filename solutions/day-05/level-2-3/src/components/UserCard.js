const userCardStyle = {
    width:'80%',
    margin: '10px 10%',
    backgroundColor: 'lightgray',
    padding: 25,
}
const badgeStyle = {
    backgroundColor: 'lightblue',
    padding: '10px 15px',
    margin: '10px 5px',
    display: 'inline-block'
}

const UserCard = ({
    data: {
        personalData: { firstName, lastName, photo},
        role,
        skills,
        join,
    }
}) => {
    return(
        <div style={userCardStyle}>
               <img src={photo}  style={{maxHeight: 150}} alt="user"></img>
               <p style={{fontWeight:'bold'}}>{firstName} {lastName}</p>
               <small>{role}</small>
               <p style={{fontWeight:'bold'}}>SKILLS</p>
                {skills.map(skill =>(<span style={badgeStyle}>{skill}</span>))}

        </div>
    )
}

export default UserCard