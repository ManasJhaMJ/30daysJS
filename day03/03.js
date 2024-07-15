// Activity 01

let a = 6
let b = 0
let c = -9

function ifelse(x) {
    if (x > 0) {
        console.log(x + ' is positive')
    }
    else if (x < 0) {
        console.log(x + ' is negative')
    }
    else {
        console.log(x + ' is zero')
    }
}

ifelse(a)
ifelse(b)
ifelse(c)


// Activity 02

let d = [5, 6, 3]

if (d[0] > d[1]) {
    if (d[0] > d[2]) {
        console.log(d[0] + ' is greatest')
    }
}

else if (d[1] > d[0]) {
    if (d[1] > d[2]) {
        console.log(d[1] + ' is greatest')
    }
}

else if (d[2] > d[0]) {
    if (d[2] > d[1]) {
        console.log(d[2] + ' is greatest')
    }
}


// Activity 03

function week(daynum) {
    switch (daynum) {
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;

        default:
            console.log('wrong number ' + daynum)
            break;
    }
}

week(1)
week(3)
week(5)
week(7)
week(9)

function grade(score) {
    switch (true) {
        case score >= 80 && score <= 100:
            console.log('A')
            break;
        case score >= 70 && score < 80:
            console.log('B')
            break;
        case score >= 60 && score < 70:
            console.log('C')
            break;
        case score >= 50 && score < 60:
            console.log('D')
            break;
        case score >= 40 && score < 50:
            console.log('E')
            break;
        default:
            console.log('F')
            break;
    }
}

grade(85)
grade(74)
grade(60)
grade(53)
grade(44)
grade(31)


// Activity 04

let e = 7
let f = 4

function evenodd(x) {
    x % 2 == 0 ? console.log(x + " is even") : console.log(x + " is odd")
}

evenodd(e)
evenodd(f)


// Activity 05

function leapyear(year) {
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
        console.log(year + ' is leap year')
    }
    else {
        console.log(year + ' is not leap year')
    }
}

leapyear(2028)
leapyear(2102)