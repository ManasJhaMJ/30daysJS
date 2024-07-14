// Activity 01

var a = 6
var b = 9
let c = a + b
console.log(c)

let d = a - b
console.log(d)

let e = a * b
console.log(e)

let f = a / b
console.log(f)

let g = a % b
console.log(g)

// Activity 02

console.log(a += 1)
console.log(b -= 1)

a -= 1
b += 1

// Activity 03

if (a < b) {
    console.log(a + " is lesser than " + b)
}

if (b > a) {
    console.log(b + " is greater than " + a)
}

if (a <= b) {
    console.log(a + " is lesser than or equal to " + b)
}

if (b >= a) {
    console.log(b + " is greater than or equal to " + a)
}

console.log(69 == '69');  // Output: true 
console.log(69 === '69'); // Output: false 

// Activity 04
if (a === 6 && b === 9) {
    console.log("69 Achieved")
}

if (a === 6 || b === 9) {
    console.log("achieved :", a, b)
}

if (a != b) {
    console.log("both are different")
}

a === b ? console.log("same") : console.log("different")
a == a ? console.log("same") : console.log("different")