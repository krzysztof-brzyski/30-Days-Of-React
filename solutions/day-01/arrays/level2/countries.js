const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

findData = (data,name) => data.indexOf(name);

function findCountry(name){
  return countries.indexOf(name);
}

function addCountry(name){
  countries.push(name);
}

function countryToUppercase(index){
  countries[index] = countries[index].toUpperCase();
}

module.exports = {countries, findCountry, addCountry, countryToUppercase};