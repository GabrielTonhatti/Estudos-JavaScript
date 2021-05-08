let a, b, c;

a = 0
b = 1
c = a + b

for (let i = 0; i < 10; i++) {
    console.log(a)

    a = b
    b = c
    c = a + b

}