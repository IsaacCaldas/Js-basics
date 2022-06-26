// new feature of ES2015

const client = {
  name: 'John',
  age: '32',
  address: {
    street: 'Who peoples st.',
    number: 010,
    city: 'Anony City'
  }
}

// destructuring
const { name, age, addres: { street, number, city } } = client

console.log(name)
console.log(age)
console.log(addres)
console.log(street)
console.log(number)
console.log(city)

const { name: n, age: a } = client 
console.log(n)
console.log(a)

// will returns undefined
//const { last_name } = client 
//console.log(last_name)
// you can be a standard value
//const { last_name = Doe } = client 
//console.log(last_name)