function evenodd(num) {
    if (num % 2 == 0) {
        console.log(num + ' is even')
    }
    else {
        console.log(num + ' is odd')
    }
}

evenodd(4)
evenodd(7)


function square(num) {
    console.log(num * num);
}

square(3)
square(5)


// Activity 02

const findMax = function (num1, num2) {
    const max = num1 > num2 ? num1 : num2;
    console.log(`The maximum number is ` + max);
};

findMax(10, 20);
findMax(15, 5);


const concatenateStrings = function (str1, str2) {
    return str1 + str2;
};

console.log(concatenateStrings('Hello, ', 'world!'));

//Activity 03 

const sum = (num1, num2) => num1 + num2;

console.log(sum(5, 7));

// Activity 04

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));

function greet(name, age = 30) {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet('Alice'));