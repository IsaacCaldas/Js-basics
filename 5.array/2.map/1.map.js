const numbers = [0, 1, 2, 3, 4, 5]

// Map = for with purpose. 
// returns other array changed with the same width like the original

let result = numbers.map(function(num, i, array) {
  // console.log(array)
  return num * 2
})

console.log(result)

const sum_10 = num => num + 10
const triple = num => num * 3
const toMoney = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}`

result = numbers.map(sum_10).map(triple).map(toMoney)
console.log(result)