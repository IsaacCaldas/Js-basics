// array in javascript is a special object
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])
console.log('')
let approveds = new Array('Fulano', 'Beltrano', 'Ciclano')
console.log(approveds)

approveds = ['Fulano', 'Beltrano', 'Ciclano']
console.log(approveds)
console.log('')
console.log(approveds[0])
console.log(approveds[1])
console.log(approveds[2])
console.log(approveds[3])

approveds[3] = 'Guest'
approveds.push('John Doe')
console.log(approveds[3])
console.log(approveds[4])
console.log('')
console.log(approveds)
console.log(approveds.length)

console.log('')
approveds[9] = 'Trouble'
console.log(approveds[9])

console.log('')
console.log(approveds.length)
console.log(approveds)
console.log(approveds[6] === undefined)
console.log(approveds[6] === null)

console.log(approveds)
approveds.sort()
console.log(approveds)

delete approveds[1]
console.log(approveds)

approveds.pop()
console.log(approveds)

/* splice 

1_param = index in array
2_param = total to remove from index in array
others params = items to add to first param
*/

approveds.splice(1, 1)
console.log(approveds)

approveds.splice(2, 2)
console.log(approveds)

approveds.splice(1, 2, 'EL5', 'EL4', 'ELEL')
console.log(approveds) 

approveds.splice(1, 0, 'El2', 'EL3')
console.log(approveds)