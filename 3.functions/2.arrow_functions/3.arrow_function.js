function Double(a) {
  return 2 * a
}
let double = function (a) {
  return 2 * a
}
double = (a) => {
  return 2 * a
}
double = a => 2 * a

console.log(double(Math.PI))

function Hello() {
  return 'Hello World!'
}
let hello = function() {
  return 'Hello World!'
}
hello = () => {
  return 'Hello World!'
}
hello = () => 'Hello World!'
hello = _ => 'Hello World!' // _ is param

console.log(hello())