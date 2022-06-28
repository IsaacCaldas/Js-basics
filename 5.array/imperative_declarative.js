const students = [
  { name: 'John Doe', test_grade: 7 },
  { name: 'Liza Smith', test_grade: 8.75 },
  { name: 'Brienne Goodman', test_grade: 9.8 },
  { name: 'Kyle Brown', test_grade: 8 }
]

// Imperative
let imperative_average = 0

for(let i = 0; i < students.length; i++) {
  
  imperative_average += students[i].test_grade
  if(i + 1 == students.length) {
    imperative_average = (imperative_average / students.length).toFixed(2)
  }
}

console.log('Imperative: ', imperative_average)

// Declarative

const getTestGrade = student => student.test_grade
const sum = (total, actual) => total + actual

const declarative_average = ((students.map(getTestGrade).reduce(sum)) / students.length).toFixed(2)

console.log('Declarative: ',declarative_average)

