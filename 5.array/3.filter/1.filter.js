const products = [
  { name: 'Macbook pro 13', price: 3249.99, fragile: true },
  { name: 'Iphone XS max', price: 849.99, fragile: true },
  { name: 'Bike', price: 100.00, fragile: false },
  { name: 'Golden Ring', price: 1599.99, fragile: false },
  { name: 'TV Full HD', price: 999.99, fragile: false }
]

console.log(products.filter(function(product) {
  return true 
}))

const expensive = product => product.price >= 800.00
const fragile = product => product.fragile

console.log(products.filter(expensive).filter(fragile))
