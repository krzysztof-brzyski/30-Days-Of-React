const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// // 1. Print the price of each product using forEach
// products.forEach( e => (
//      typeof e.price === 'number' ? console.log(e.price) : console.log('no price')
// ));


// // 2. Print the product items as follows using forEach
// products.forEach( e => {
//     let price = typeof e.price === 'number' ? e.price : 'unknown';
//     let result = `The price of ${e.product} is ${price}.`
//     console.log(result);
// });


// // 3. Calculate the sum of all the prices using forEach
// let sum = 0;
// products.forEach( e => {if(typeof e.price === 'number')sum += e.price} );
// console.log(sum);

// // 4. Create an array of prices using map and store it in a variable prices
// let prices = products.map( e => (e.price));
// console.log(prices);


// // 5. Filter products with prices
// let withPrices = products.filter(e => typeof e.price === 'number');
// withPrices.forEach(e => console.log(e.price));

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)

// 7. Calculate the sum of all the prices using reduce only


// 8. Find the first product which doesn't have a price value

// 9. Find the index of the first product which does not have price value

// 10. Check if some products do not have a price value

// 11. Check if all the products have price value

// 12. Explain the difference between forEach, map, filter and reduce

// 13. Explain the difference between filter, find and findIndex

// 14. Explain the difference between some and every
