Intro to Javascript

1.) Find the last name in the following array:

var friends = [
                'Moe',
                'Larry',
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];

Add your name to the end of the `friends` and add another name to beginning. Change the `Elizabeth` to `Liz`.

console.log(friends[11]);

friends.push("Steven");

friends.unshift("greg");

friends[friends.indexOf("Elizabeth")] = "Liz";










2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above

friends.sort();













3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)

ages.sort(function (a, b) {
  return a-b;
});
console.log(ages[((ages.length -1) / 2)]);


//built in methods are no fun
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
var ageSort = [];
var min = Number.MAX_VALUE;
for (i = 0; i < ages.length; i++) {

  for (j = 0; j < ages.length; j++) {

    if (min > ages[j]) {
            min = ages[j];
     }

  }
  ageSort.push(min);
  ages.splice(ages.indexOf(min), 1, Number.MAX_VALUE);
  min = Number.MAX_VALUE;
}

console.log(ageSort[((ageSort.length - 1) / 2)]);







4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

var fArray = friends.split(",");
fArray.sort();






5.) List all the `friends` above in reverse alphabetical order.

var fArray = friends.split(",");
fArray.sort();
fArray.reverse();









6.) We have two lists of friends below. We need to combine them into one list and sort them:

var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];

var allFriends = myFriends.concat(yourFriends);
allFriends.sort();







7.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food. Hint: go to MDN to find an array method for finding the index of something in the array.

var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

console.log(foods.indexOf("Pizza") + 1);








8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

foods.splice(foods.indexOf("Donuts"), 1);







9.) My friends want to know what my `5`th to `10`th favorite foods are.

for (i = 4; i < 10; i++) {
    console.log(foods[i]);
}








10.) How would you create an array that efficiently stored the following information:

  'Moe' is 18
  'Larry' is 19
  'Curly' is 20
  'Jane' is 20
  'Emma' is 21
  'Elizabeth' is 18
  'Elinor' is 23
  'Mary' is 25
  'Darcy' is 24
  'Grey' is 18
  'Lydia' is 24
  'Harriet' is 18


var friends = {
  'Moe': 18,
  'Larry': 19,
  'Curly': 20,
  'Jane': 20,
  'Emma': 21,
  'Elizabeth': 18,
  'Elinor': 23,
  'Mary': 25,
  'Darcy': 24,
  'Grey': 18,
  'Lydia': 24,
  'Harriet': 18
  };


##Javascript Control Flow Exercises

1.) Nightclub Bouncer

Using an if/else expression, create a script that prompts the user for their age, then:

  * If the user is older than 18, he/she should receive a message that he/she may enter.
  * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
  * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
  * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.

var user = prompt('How olde are ye?');

if ((user > 18) && (user < 21)) {
    console.log('Enter if ye must... But no grog!');
  }

else if (user >= 21) {
  console.log('Welcome aboard!');
}

else {
  console.log('The club be no place for young lads.');
}











2.) Grade.js
Output the following letter grade from a variable with with a test score.

Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a `switch` statement.


switch(true) {
  case score>=90:
     console.log("A");
  break;

  case score>=80:
    console.log('B');
  break;

  case score>=70:
    console.log('C');
  break;

  case score>=60:
    console.log("D");
  break;

  case score<60:
    console.log('F');
  break;
}










3.) Fizz Buzz
Write a small program that asks a user for a number. If it's a multiple of 3, output "fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".

var number = prompt("choose a number");
if ((number % 3 === 0) && (number % 5 === 0)) {
  console.log("Fizzbuzz");
}
else if (number % 3 === 0){
  console.log("fizz");
}
else if (number % 5 === 0) {
  console.log("buzz");
}
else {
  console.log("not a fizz or a buzz");
}










4.) BONUS!! (Not required, but give it the college try!)

- There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

- There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.


var name = prompt("Enter your last name");
var ticketType = prompt("Enter your ticket type");
var nameU = name.toUpperCase();
var ticketU = ticketType.toUpperCase();
if (nameU[0] === "A" || nameU[0] === "B" ||  nameU[0] === "C" ||  nameU[0] === "D" ||
 nameU[0] === "E" || nameU[0] === "F" || nameU[0] === "G" || nameU[0] === "H" ||
 nameU[0] === "I") {
     console.log("Left seating");
 }
 else if (nameU[0] === "J" || nameU[0] === "K" || nameU[0] === "L" || nameU[0] === "M" ||
 nameU[0] === "N" || nameU[0] === "O" || nameU[0] === "P" || nameU[0] === "Q" || nameU[0] === "R")
 {
     console.log("Middle seating");
 }
 else {
     console.log("Right seating");
 }

 if (ticketU === "STANDARD") {
     console.log("Standard seating in row 4 or higher");
 }

 else if (ticketU === "PREMIUM") {
     console.log("Premium seating in rows 1 through 3");
 }








var ticketType = prompt("Would you like a standard, premier, or premier plus ticket?");
var discountType = prompt("Are you a student, veteran, or a senior? Enter 'yes' or 'no'");
var discount = discountType.toLowerCase();
var ticketU = ticketType.toLowerCase();
var ticketPrice = 0;
if (ticketU === "standard") {
    ticketPrice = 50;
}
else if (ticketU === "premier") {
    ticketPrice = 65;
}
else if (ticketU === "premier plus") {
    ticketPrice = 85;
}

if (discount === "yes") {
    ticketPrice -= 10;
}

console.log(ticketU + " " + "ticket is $" + ticketPrice);
