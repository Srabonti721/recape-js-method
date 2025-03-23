const product = [
    {name:'Sum',color:'blue',price:2000,brand:'sumsung'},
    {name:'apple1',color:'blue',price:3000,brand:'apple'},
    {name:'realme1',color:'black',price:1000,brand:'sumsung'},
    {name:'realme2',color:'gold',price:2000,brand:'realme'},
    {name:'realme2',color:'black',price:2000,brand:'realme'},
    {name:'apple2',color:'blue',price:3000,brand:'apple'}
]
// console.log(product);
 //map() kono array like object thaka akta array hesabe return kore.
// const output = product.map(singleProduct =>singleProduct.color);
// console.log(output);
// map() subumatro array like object ar majar nidesto oi upadanka return kore.
// const result = product.map(produc=>{
//     // console.log(produc.price);   
// })
// forEach----
product.forEach(produc=>{
// console.log(produc.price);
})
// difrent way of forEach--
// product.forEach(singleProduct=>console.log(singleProduct.color))
// filter-----
const filterResult = product.filter(product=>product.price>=1500)
console.log(filterResult);
// find-----
const findResult = product.find(produc=>produc.name==='realme2');
console.log(findResult);


