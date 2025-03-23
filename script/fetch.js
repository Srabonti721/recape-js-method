// object ka jason datai convert-------
const person = {
    name: 'alimoden',
    age: 55,
    country: 'bangladesh',
    colors: ['black', 'white', 'gray'],
    fathersName: " rohomot shak",
    mothersName: 'kuduse',
    education: {
        ispassed: true,
        passingYear: 1995,
        collage: 'DUET',
    }
}
// const convertJsonData = JSON.stringify(person);
// console.log(convertJsonData);
// const convertPlanData = JSON.parse(convertJsonData);
// console.log(convertPlanData);
// fetch---------
// fetch('url')
// .then(Response=>Response.json())
// .then(data=>console.log(data)
// )
// const key = Object.keys(person);
// console.log(key);
// const value = Object.values(person);
// console.log(value);


const product = [
    {name:'Sum',color:'blue',price:2000,brand:'sumsung'},
    {name:'apple1',color:'blue',price:3000,brand:'apple'},
    {name:'realme1',color:'black',price:1000,brand:'sumsung'},
    {name:'realme2',color:'gold',price:2000,brand:'realme'},
    {name:'realme2',color:'black',price:2000,brand:'realme'},
    {name:'apple2',color:'blue',price:3000,brand:'apple'}
]
const newData = {
    name:'nokaya',
    brand:'nokaya',
    price:1000,
    color:'gray'
}
const newArray = [...product,newData]
console.log(newArray);
