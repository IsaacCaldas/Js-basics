Array.prototype.proto_Map = function(callback) {
  const new_array = []
  for(let i = 0; i < this.length; i++) {
    new_array.push(callback(this[i], i, this))
  }
  return new_array
}

const cart = [
  '{ "name": "Pencil", "price": 0.49 }',
  '{ "name": "Book", "price": 13.99 }',
  '{ "name": "Notebook", "price": 5.00 }',
  '{ "name": "Schoolbag", "price": 35.00 }',
  '{ "name": "Ruler", "price": 2.00 }'
]

cart.proto_Map(product => {
  let product_json = JSON.parse(product)
  let price = parseFloat(product_json.price).toFixed(2).replace('.', ',')
  console.log(`R$ ${price}`)
})