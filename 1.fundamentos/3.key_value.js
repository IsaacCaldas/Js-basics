// key / value
const hello = 'Hello world!' // lexical context 1

function exec() {
  const hello = 'Hello JS!' // lexical context 2
  return hello 
}

// Objects are nested groups of key/values
const client = {
  name: 'Isaac',
  age: 18,
  weight: '70kg',
  address: {
    street: 'Street 1',
    city: 'Js city',
    country: 'Brazil'
  },
  admin: true
}

console.log(hello)
console.log(exec())
console.log(client)