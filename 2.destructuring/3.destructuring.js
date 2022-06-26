function rand({ min = 0, max = 10 }) {
  const value = Math.floor(Math.random() * (max - min) + min)
  return value 
}

const obj = { max: 3, min: -15}
console.log(rand(obj))
console.log(rand({ min: -21 }))
console.log(rand({}))
console.log(rand())