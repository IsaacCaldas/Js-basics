const pilots = ['Leclerc', 'Verstappen', 'Perez', 'Hamilton',  'Sainz', 'Schumacher', 'Alonso', 'Vettel', 'Massa', 'Bottas', 'Stroll',]
// console.log(pilots)

// For each have 3 params optional
pilots.forEach(function(pilot, i, array) {
  console.log(array)
  console.log(`${i + 1}º ${pilot}`)
})

console.log('')
pilots.forEach(pilot => console.log(pilot))

console.log('')
pilots.forEach(() => console.log('Chegou!'))

console.log('')
const grid = (pilot, i) => console.log(`${i + 1}º ${pilot}`)
pilots.forEach(grid)