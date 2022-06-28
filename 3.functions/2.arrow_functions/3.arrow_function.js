console.log('Normal Function')
let compareWithThis = function(param) {
  console.log(this === param)
}

compareWithThis(global) // node

const obj = {}
compareWithThis = compareWithThis.bind(obj)

compareWithThis(global)
compareWithThis(obj)
compareWithThis(this)

console.log('------------------------')
console.log('Arrow Function')
// in arrow function, the this refer about the context, and don't change

let compareWithThisArrow = param => console.log(this === param)

compareWithThisArrow(global)
compareWithThisArrow(module.exports) // node
compareWithThisArrow(this) 

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj)
compareWithThisArrow(module.exports) 