const number = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
const greaterThanTen = el => el > 10
const even = el => el % 2 == 0

console.log(number.filter(el => el > 0))
console.log(number.filter(greaterThanZero))
console.log(number.filter(greaterThanTen))
console.log(number.filter(even))

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const greatStudent = students => students.score >= 9

console.log(students.filter(greatStudent))
console.log(students)