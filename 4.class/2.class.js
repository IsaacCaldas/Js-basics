class Avo {
  constructor(last_name) {
    this.last_name = last_name
  }
}

class Pai extends Avo {
  constructor(last_name, name = 'John'){
    super(last_name) 
    this.name = name
  }
}

class Filho extends Pai {
  constructor(){
    super('Doe') 
  }
}

const pai = new Pai
console.log(pai)
const filho = new Filho
console.log(filho)
