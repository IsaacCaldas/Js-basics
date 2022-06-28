const student = {
  name: 'John Doe',
  sayHello() {
    console.log(`Hello ${this.name}!`) 
  }
}

student.sayHello()

const say = student.sayHello
say()

const sayBinded = student.sayHello.bind(student)
sayBinded()

