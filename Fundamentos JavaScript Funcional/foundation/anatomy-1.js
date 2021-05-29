// Function declaration

function sayHello() {
    console.log('Hello!')
}

sayHello()


function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}

sayHelloTo('Mike')

function returnHi() {
    return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHito(name) {
    return `Hi ${name}`
}

console.log(returnHito('John'));