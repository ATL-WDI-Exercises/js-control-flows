// Intro to Javascript

// 1.) Find the last name in the following array:

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

//Find the last name in the following array:

friends[friends.length - 1]

// Add your name to the end of the `friends`
// and add another name to beginning.Change the `Elizabeth`
// to `Liz`.

friends.push('Anthony');

friends.unshift('Conway');

friends[5] = 'Liz';

// 2.) Go to MDN and lookup `Array.sort`.Sort the list of `friends` above

friends.sort();

// 3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

// Find the `median` age.
// Note: the median is the middle index of the sorted array.
// (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)

var sum = ages.reduce(function(a, b) {
    return a + b
});
var count = ages.length;
var mean = sum / count;

Math.round(mean);

// 4.) There are a list of names in a string, below.
// How could we sort them?
// Hint : use string and array methods.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

friends.split(',');

// 5.) List all the `friends` above in reverse alphabetical order.

var friends = friends.split(',');

friends.reverse();

// 6.) We have two lists of friends below.We need to combine them into one list and sort them:

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

var mergeFriends = yourFriends + myFriends;
var ourFriends = mergeFriends.split(',');

console.log(ourFriends.sort());

// 7.) I have a list of favorite foods below.
// If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food.
// Hint: go to MDN to find an array method for finding the index of something in the array.

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

foods.indexOf();

// 8.) I made a mistake with my favorite foods.How can I find the index of `Donuts` and remove it ? * * (Hint: look up `splice`) * *

foods.splice(foods.indexOf('Donuts'), 1);

// 9.) My friends want to know what my `5`th to `10`th favorite foods are.

var whyDoMyFriendsWantToKnowThis = foods.slice(5, 11);

// 10.) How would you create an array that efficiently stored the following : or,mation:
: ',Moe'
is 18: ',Larry'
is 19: ',Curly'
is 20: ',Jane'
is 20: ',Emma'
is 21: ',Elizabeth'
is 18: ',Elinor'
is 23: ',Mary'
is 25
    'Darcy'
is 24
    'Grey'
is 18
    'Lydia'
is 24
    'Harriet'
is 18

var friendsAges = {
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
  'Harriet': 18,
};

// ## Javascript Control Flow Exercises

// 1.) Nightclub Bouncer

// Using an if/else expression, create a script that prompts the user for their age, then:

// * If the user is older than 18, he / she should receive a message that he/she may enter.
// * If the user is less than 18, then he/she can 't enter and should have a message telling him/her that he/she' is too young.
// * If the user is between 18 and 21, he / she should receive a message that he/she can enter, but not drink.
// * If the user is older than 21, he / she should receive a message that he/she can both enter and drink.

var userAge = prompt('How old are you?');

userAge = parseInt(userAge);

if (userAge > 18 && userAge < 21) {
  alert("Come on inside, get your club on BUT NOT your drink on.");
} else if (userAge > 21) {
  alert("Come on inside, get your club AND your drink on.");
} else {
  alert("Sorry, you can\'t get your drink on today.")
}

// ^^^^^^ There's no condition in which a user can be over 18 and not have the choice of drinking or not drinking. There's no reason to create a separate over-18 response.

// 2.) Grade.js
// Output the following letter grade from a variable with a test score.

// Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a `switch` statement.

var testScore = "";
var letterGrade = "";

parseInt(testScore);

switch(true) {
  case (testScore >= 90):
    letterGrade = "A";
    alert("You made an " + letterGrade + " on the test. Rock on with your bad self.");
    break;
  case ((testScore < 90) && (testScore >=80)):
    letterGrade = "B";
    alert("You made a " + letterGrade + " on the test, also known as an NTS: not too shabby.");
    break;
  case ((testScore < 80) && (testScore >= 70)):
    letterGrade = "C";
    alert("You made a " + letterGrade + " on the test. Which is average. Which is fine.");
    break;
  case ((testScore < 70) && (testScore >=60)):
    letterGrade = "D";
    alert("You made a " + letterGrade + " on the test, and that ain't gonna cut it.");
    break;
  case (testScore < 60):
    letterGrade = "F";
    alert("You made a " + letterGrade + " on the test. Maybe tests aren't your thing.");
    break;
  default:
    alert("If you can't enter a valid test score, you shouldn't be handing out grades.");
}

// 3.) Fizz Buzz
// Write a small program that asks a user for a number. If it's a multiple of 3,output "fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".

var num = prompt("Pick a number, any number.");
parseInt(num);

switch(true) {
  case ((num % 3 === 0) && (num % 5 === 0)):
    console.log("Fizzbuzz. FIZZBUZZ. FIIIIIIZZZZZZBUUUUUUUUUZZZZZZ!!!!!!");
    break;
  case (num % 3 === 0):
    console.log("More fizz than Alka-Seltzer.");
    break;
  case (num % 5 === 0):
    console.log("You buzzing like a honeybee.");
    break;
  default:
    console.log("Man, I don't even know.");
  }

// 4.) BONUS!!(Not required, but give it the college try !)

// There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

var name = ["left", "middle", "right"];
var ticketType = ["Premium","Normal"];

if (ticketType[0]) {
  console.log("Oooooh, a premium ticket.");
  switch (true) {
    case name[0]:
      console.log("Sit in the first three rows of the left section.");
      break;
    case name[1]:
      console.log("Sit in the first three rows of the middle section.");
      break;
    case name[3]:
      console.log("Sit in the first three rows of the right section.");
      break;
  }
} else {
  console.log("A normal ticket. You no good cheap bastard.")
  switch (true) {
    case name[0]:
      console.log("Sit anywhere but the first three rows of the left section.");
      break;
    case name[1]:
      console.log("Sit anywhere but the first three rows of the middle section.");
      break;
    case name[3]:
      console.log("Sit anywhere but the first three rows of the right section.");
      break;
  }
}

- There is an event with ticket prices that are `$50`, `$65`, `$85`
for standard, premier, and premier plus(
    for drinks) seating.Seniors, veterans, and students receive a `$10`
discount
while standard patrons receive no discount.Based on hardcoded variables
for `ticketType`
and `discountType`, print out a patrons `ticketPrice`.
