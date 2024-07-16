// Activity 01

for (var i = 1; i <= 10; i++) {
    console.log(i)
}

for (var i = 1; i <= 10; i++) {
    console.log(i * 5)
}


// Activity 02

var sum = 0;
var j = 1;
while (j <= 10) {
    sum += j;
    j++;
}

console.log('sum is : ' + sum)

var k = 10;
while (k > 0) {
    console.log(k)
    k--;
}

// activity 03

let l = 1;

do {
    console.log(l);
    l++;
} while (l <= 5);


function factorial(n) {
    let result = 1;
    let m = n;

    do {
        result *= m;
        m--;
    } while (m > 0);

    return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(2));


// Activity 04

for (let lines = 1; lines <= 5; lines++) {
    let pattern = "";
    for (let stars = 1; stars <= lines; stars++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}

//Activity 05

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}