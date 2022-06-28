const students = [
  { name: 'John', tests_average: 7.5, scholarship: true },
  { name: 'Liza', tests_average: 8.95, scholarship: false },
  { name: 'Gabriel', tests_average: 4.0, scholarship: true },
  { name: 'Judy', tests_average: 8.5, scholarship: false },
  { name: 'Brienne', tests_average: 6.75, scholarship: false },
  { name: 'Mike', tests_average: 5.5, scholarship: true },
  { name: 'Luka', tests_average: 10.0 , scholarship: false }
]

// Challenges

// 1: all students have scholarship?
const all_has_scholarship = (result, scholarship) => result && scholarship
console.log(students.map(student => student.scholarship).reduce(all_has_scholarship))

// 2: Any students have scholarship?
const any_has_scholarship = (result, scholarship) => result || scholarship
console.log(students.map(student => student.scholarship).reduce(any_has_scholarship))

