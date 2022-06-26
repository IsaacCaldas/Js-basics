const [a] = 10
console.log(a)

// you can jump a array elements
const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, n2_2]] = [[, 8, 9], [1, 2]]
console.log(n2_2)