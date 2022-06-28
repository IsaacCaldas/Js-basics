Array.prototype.proto_ForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const pilots = ['Leclerc', 'Verstappen', 'Perez', 'Hamilton',  'Sainz', 'Schumacher', 'Alonso', 'Vettel', 'Massa', 'Bottas', 'Stroll',]

pilots.proto_ForEach(function(pilot, i, array) {
  // console.log(array)
  console.log(`${i + 1}º ${pilot}`)
})