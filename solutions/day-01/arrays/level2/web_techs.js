  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  function findTech(name){
    return webTechs.indexOf(name);
  }

  function setTech(name){
    webTechs.push(name);
  }

  module.exports = {webTechs, findTech, setTech};