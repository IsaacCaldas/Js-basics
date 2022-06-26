console.log(typeof Object) // object is a function
console.log(typeof new Object) // new Object is a object

const client = function() {}
console.log(typeof client) // client is a function
console.log(typeof new client) // new client is a object

class Product {} // ES 2015 (ES6)
console.log(typeof Product) // Product is a function
console.log(typeof new Product()) // new Product is a object