Array.prototype.proto_Filter = function(callback) {
  const new_array = []
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      new_array.push(this[i])
    }
  }
  return new_array
}

const products = [
  { name: 'Macbook pro 13', price: 3249.99, fragile: true },
  { name: 'Iphone XS max', price: 849.99, fragile: true },
  { name: 'Bike', price: 100.00, fragile: false },
  { name: 'Golden Ring', price: 1599.99, fragile: false },
  { name: 'TV Full HD', price: 999.99, fragile: false }
]

const expensive = product => product.price >= 800.00
const fragile = product => product.fragile

console.log(products.proto_Filter(expensive).proto_Filter(fragile))
