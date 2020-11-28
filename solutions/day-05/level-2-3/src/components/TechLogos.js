

const TechLogo = (props) => (
    <div className="tech-logo">
        <img src={props.src}></img>
    </div>
)

const techData = ['1.jpg','2.jpg','3.jpg','4.jpg']

const techLogoGenerator = data => {
    let path = (img) => ('/images/' + img ) 
    const TechLogos = data.map( imgSrc => (<TechLogo src={path(imgSrc)} />))
    return TechLogos;
}

const TechLogos = () => (
    <div className='tech-logos'>
        <h2>Frontend Technologies</h2>
        {techLogoGenerator(techData)}
    </div>
)


export default TechLogos