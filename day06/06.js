// Activity 01

let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)

console.log(arr1[0], arr1[4])

// Activity 02

arr1.push(6)
console.log(arr1)

arr1.pop(6)
console.log(arr1)

arr1.shift(1)
console.log(arr1)

arr1.unshift(1)
console.log(arr1)

//Activity 03

const arr1Dbl = arr1.map((i) => i * 2);
console.log(arr1Dbl);

const arr1Even = arr1.filter((i) => i % 2 == 0);
console.log(arr1Even);

//activity 04

const arrReduce = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(arrReduce);

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

arr1.forEach((i) => console.log({ i }));

const arr2 = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

console.log(arr2);

console.log(arr2[1][2]);