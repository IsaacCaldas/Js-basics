const cart = [
  '{ "name": "Pencil", "price": 0.50 }',
  '{ "name": "Book", "price": 13.99 }',
  '{ "name": "Notebook", "price": 5.00 }',
  '{ "name": "Schoolbag", "price": 35.00 }',
  '{ "name": "Ruler", "price": 2.00 }'
]

cart.map(product => {
  let product_json = JSON.parse(product)
  let price = parseFloat(product_json.price).toFixed(2).replace('.', ',')
  console.log(`R$ ${price}`)
})