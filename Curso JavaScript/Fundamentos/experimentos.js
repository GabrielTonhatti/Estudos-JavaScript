let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.d = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma varival maluca: sem var e let!
abc = 3 // não faça isso em casa!!!
console.log(global.abc)

// moudle.exports = { e: 456, f: false, g: 'teste' }
