const sum = function(x,y) {
  return x + y
}
const exp = function(x,y) {
  return x**y
}

const showResult = function (a, b, operation = sum) { // this sum is the function
  console.log(operation(a , b))
}

showResult(4, 10)
showResult(4, 4, exp)
showResult(5, 10, function (x, y) {
  return x * y 
})
showResult(12, 10, (x, y) => x / y )
console.log('-------------------')
const person = {
  say: function () {
    console.log('Hello World!')
  },
  silence: () => console.log('🤫')
}

person.say()
person.silence()
