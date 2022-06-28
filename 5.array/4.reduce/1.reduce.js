const students = [
  { name: 'John', tests_average: 7.5, scholarship: false },
  { name: 'Liza', tests_average: 8.95, scholarship: false },
  { name: 'Gabriel', tests_average: 4.0, scholarship: false },
  { name: 'Judy', tests_average: 8.5, scholarship: false },
  { name: 'Brienne', tests_average: 6.75, scholarship: false },
  { name: 'Mike', tests_average: 5.5, scholarship: false },
  { name: 'Luka', tests_average: 10.0 , scholarship: false }
]

// const total_average = students.map(student => student.tests_average)
//   .reduce(function(acc, actual, i) {
//     console.log(acc, actual)
//     let total = acc + actual;
//     return total
//   }, 100) 
const total_average = students.map(student => student.tests_average)
  .reduce(function(acc, actual) {
    console.log(acc, actual)
    let total = acc + actual;
    return total
  }) 

console.log('')
console.log('Class average: ', (total_average / students.length).toFixed(2))