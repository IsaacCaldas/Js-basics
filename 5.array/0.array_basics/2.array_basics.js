const pilots = ['Schumacher', 'Alonso', 'Vettel', 'Leclerc', 'Bottas']
console.log(pilots)

// METHOS TO REMOVE
pilots.pop() // remove from the last index
console.log(pilots) 
pilots.shift() // remove from the first index
console.log(pilots) 

// METHODS TO ADD
pilots.push('Verstappen') // add to last position in array
console.log(pilots)
pilots.unshift('Hamilton') // add to first position in array
console.log(pilots)

// SPLICE
/*  
1_param = index in array
2_param = total to remove from index in array
others params = items to add to first param
*/

// Add 
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// remove
pilots.splice(1, 3)
console.log(pilots)

// And & remove
pilots.splice(2, 1, 'Perez', 'Stroll', 'Sainz')
console.log(pilots)

// SLICE
/*
1_param = index in array
2_param = the index not to copy anymore
*/
// THE SLICE RETURN OTHER ARRAY IN THE PARAMS INTERVAL
let losers = pilots.slice(3)
console.log(losers)

const podium = pilots.slice(0, 3)
console.log(podium)
