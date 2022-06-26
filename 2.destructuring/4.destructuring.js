function rand([ min = 0, max = 10 ]) {
  
  if (min > max) [min, max] = [max, min]
  const value = Math.floor(Math.random() * (max - min) + min)
  return value 
}

const obj = [3, -15]
console.log(rand(obj))
console.log(rand([1]))
console.log(rand([, 3]))
console.log(rand([]))
// error
//console.log(rand())