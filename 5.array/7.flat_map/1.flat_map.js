// Not exist in ES standard

const school = [
  {
    name: '1 MA',
    students: [
      { name: 'John', average: 6.5 },
      { name: 'Liza', average: 7 },
      { name: 'Emy', average: 8.75 },
      { name: 'Linda', average: 9.40 },
      { name: 'James', average: 10 }
    ]
  },
  {
    name: '1 MB',
    students: [
      { name: 'John', average: 6 },
      { name: 'Larry', average: 10 },
      { name: 'Gabriel', average: 4 },
      { name: 'Marta', average: 5.5 },
      { name: 'Mary', average: 7.75 }
    ]
  },
  {
    name: '2 MA',
    students: [
      { name: 'Julian', average: 6.5 },
      { name: 'Liza', average: 7 },
      { name: 'Fagundes', average: 7 },
      { name: 'Levi', average: 8 },
      { name: 'James', average: 3 }
    ]
  },
  {
    name: '2 MB',
    students: [
      { name: 'Joana', average: 0 },
      { name: 'Shaun', average: 8},
      { name: 'Richard', average: 6.75 },
      { name: 'Paul', average: 8 },
      { name: 'James', average: 9.25 }
    ]
  },
  {
    name: '3 MA',
    students: [
      { name: 'Gill', average: 2 },
      { name: 'Mika', average: 10 },
      { name: 'Emy', average: 5 },
      { name: 'Bill', average: 6 },
      { name: 'Zoe', average: 7.25 }
    ]
  },
  {
    name: '3 MB',
    students: [
      { name: 'Ana', average: 7.5 },
      { name: 'Bianka', average: 6 },
      { name: 'Vanusa', average: 4 },
      { name: 'July', average: 9 },
      { name: 'Diana', average: 9 }
    ]
  }
]

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const getStudentAverage = student => student.average.toFixed(2)
const getClassAverage = school_class => school_class.students.map(getStudentAverage)

const school_average = school.map(getClassAverage)
console.log(school_average)
const school_flat_average = school.flatMap(getClassAverage)
console.log(school_flat_average)

