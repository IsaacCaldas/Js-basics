Array.prototype.proto_Reduce = function(callback, initial_value) {
  const initial_index = initial_value ? 0 : 1
  let acc = initial_value || this[0]
  for(let i = initial_index; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }
  return acc
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = (total, value) => total + value
console.log(numbers.proto_Reduce(sum))
console.log(numbers.proto_Reduce(sum, 100))
console.log(numbers.proto_Reduce(sum, 22))