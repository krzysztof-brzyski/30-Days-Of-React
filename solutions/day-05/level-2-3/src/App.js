import './App.css';
// import TechLogos from './components/TechLogos';
// import Form from './components/Form';
// import ColorDiv from './components/ColorDiv';
// import UserCard from './components/UserCard';
// import CardsContainer from './components/CardsContainer';
// import HexCardsComponent from './components/HexCardsComponent';
import CountriesList from './components/CountriesList'

import {tenHighestPopulation} from './countries'

// const hexColorGenerator = () => {
//   let color = '#'
//   const colorData = '0123456789abcdef'
//   for(let i = 0; i < 6; i++){
//     color += colorData[Math.floor(Math.random()*colorData.length)];
    
//   }
//   return color;
// }


// const hexColors = [
//   "#6fabb9","#ff550e","#2a84b0","#465d16","#c6235a","#69bdc7","#ba9e5a","#e40c18","#32131f","#1e42cd","#dcd856","#1d5c2e","#a20b4a","#f073ee","#13679d","#18dc61","#eb5c73","#96a6eb","#256bbe","#1a434e"
// ]

// const user = {
//   personalData: {
//     firstName: 'Kaa',
//     lastName: 'Bee',
//     photo: '/images/1.jpg'
//   },
//   role: 'Senior Developer', 
//   skills: ['HTML', 'CSS', 'React','PHP'],
//   join: 'Aug, 30 2020'
// }


// let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function App() {

  return (
    <div className="App">
      {/* <TechLogos/> */}
      <CountriesList countries={tenHighestPopulation}/>
      {/* <HexCardsComponent colors={hexColors} /> */}
      {/* <CardsContainer data={numbers}/> */}
      {/* <Form/> */}
      {/* <ColorDiv color={hexColorGenerator()}/>
      <ColorDiv color={hexColorGenerator()}/>
      <ColorDiv color={hexColorGenerator()}/>
      <ColorDiv color={hexColorGenerator()}/>
      <UserCard data={user}/> */}
    </div>
  );
}

export default App;
