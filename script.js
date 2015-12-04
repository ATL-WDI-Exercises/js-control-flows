//###1 Nightclub Bouncer
var age = prompt('What is your age?');
if (age >= 21) {
    console.log ('Come in and get drunk!');
}
else if (age < 21 && age > 17) {
    console.log ('Get in here! No fun for you though!')
}
else {
    console.log ('Too young! Go away!');
}

//###2 Grade.js
var score = prompt('What did you get?');
var grade = ((score - (score % 10)) / 10);
switch (grade) {
    case 10:
        letter = 'A';
        break;
    case 9:
        letter = 'A';
        break;
    case 8:
        letter = 'B';
        break;
    case 7:
        letter = 'C';
        break;
    case 6:
        letter = 'D';
        break;
    default:
        letter = 'F';
}

//###3 Fizz Buzz
var num = prompt('Enter a number');
if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
}
else if (num % 3 === 0) {
    console.log('Fizz');
}
else if (num % 5 === 0) {
    console.log('Buzz');
}
else {
}

//###4 EXTRA BONUS!! (Not required, but give it the college try!)
var patronName = 'Bob';
var ticketType = 'premier plus';
var discountType = 'none';
if (ticketType === 'standard') {
    if (discountType !== 'none') {
        console.log('Do not sit in the first three rows of your section. Ticket price: $40');
    }
    else {
        console.log('Do not sit in the first three rows of your section. Ticket price: $50');
    }

}
else if (ticketType === 'premier') {
    if (discountType !== 'none') {
        console.log('Please take a seat in the first three rows of your section. Ticket Price: $55');
    }
    else {
        console.log('Please take a seat in the first three rows of your section. Ticket Price: $65');
    }
}
else {
    if (discountType !== 'none') {
        console.log('Please take a seat in the first three rows of your section. Ticket price: $75');
    }
    else {
        console.log('Please take a seat in the first three rows of your section. Ticket price: $85');
    }
}
