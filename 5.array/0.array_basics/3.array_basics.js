const array_obj = { 
  0: 'John Doe',
  1: 'Fulano Who',
  2: 'Beltrano Who',
  3: 'Ciclano Who'
}

console.log(array_obj)

Object.defineProperty(array_obj, 'toString', {
  value: function() { return Object.values(this)},
  enumarable: false
})

console.log(array_obj[0])

const array_truth = ['John Doe', 'Fulano Who', 'Beltrano Who', 'Ciclano Who']

console.log(array_obj.toString(), array_truth)
