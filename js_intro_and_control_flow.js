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

console.log(friends[friends.length - 1]); //find and view last name in friends array

Add your name to the end of the `friends` and add another name to beginning. Change the `Elizabeth` to `Liz`.

friends.push('Katie'); //add my name to end of friends
friends.unshift('Nancy'); //add name to beginning of friends
friends.splice(6, 1,'Liz'); //change "Elizabeth" to "Liz"
console.log(friends); //view lines 24-26

2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above

console.log(friends.sort()); //sort and view updated order of friends array

3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)

ages.sort(function(a,b){return a-b});//sort ages in ascending numerical order
console.log(ages[(ages.length-1)/2]);//find and view median age of ages array

4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

friends = friends.split(','); //split string to array
console.log(friends.sort()); //sort and view friends array in alphabetical order

5.) List all the `friends` above in reverse alphabetical order.

console.log(friends.sort().reverse()); //sort friends array in reverse alphabetical order

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

var ourFriends = myFriends.concat(yourFriends); //combine myFriends & your Friends
console.log(ourFriends.sort()); //sort ourFriends in alphabetical order

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

var favFoods = 'Pizza'; //pick the food to find
console.log(foods.indexOf(favFoods) + ' out of ' + (foods.length-1));  //find and view index of food chosen

8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

foods.indexOf('Donuts'); //find index of 'Donuts'
foods.splice(13, 1); //remove 'Donuts'
console.log(foods); //view updated food array

9.) My friends want to know what my `5`th to `10`th favorite foods are.

console.log(foods[4]); //5th favorite food
console.log(foods[9]); //10th favorite food

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

  //use an array of objects
  var friends = [
    {
      name: 'Moe',
      age: 18
    },
    {
      name: 'Larry',
      age: 19
    },
    {
      name: 'Curly',
      age: 20
    },
    {
      name: 'Jane',
      age: 20
    },
    {
      name: 'Emma',
      age: 21
    },
    {
      name: 'Elizabeth',
      age: 18
    },
    {
      name: 'Elinor',
      age: 23
    },
    {
      name: 'Mary',
      age: 25
    },
    {
      name: 'Darcy',
      age: 24
    },
    {
      name: 'Grey',
      age: 18
    },
    {
      name: 'Lydia',
      age: 24
    },
    {
      name: 'Harriet',
      age: 18
    }
  ]

##Javascript Control Flow Exercises

1.) Nightclub Bouncer

Using an if/else expression, create a script that prompts the user for their age, then:
  * If the user is older than 18, he/she should receive a message that he/she may enter.
  * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
  * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
  * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.

  var userAge;
  var again;

  function user() {
    userAge = prompt('What is your age?');
    userAge = parseInt(userAge);

    if (typeof userAge === 'number' && !isNaN(userAge)) {
      if (userAge >= 18) {
        alert('You can enter the site.');
      } else if (userAge < 18) {
        alert('This site is for 18 and up. You are too young.');
      } else if (userAge >= 18 && userAge < 21) {
        alert('You can enter the site, but you cannot drink.');
      } else if (userAge >= 21) {
        alert('You can enter the site, and you can drink.');
      }
    } else {
      again = confirm('Please enter your age as a number.');
      if (again) {
        user();
      }
    }
  }

  user();

2.) Grade.js
Output the following letter grade from a variable with a test score.
Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a `switch` statement.

var testScore;

function score() {
  testScore = prompt('Enter a number between 1-100.');
  testScore = parseInt(testScore);

  if(!testScore) {
    testScore;
  }

  if(testScore) {
    if(testScore < 60 && testScore >= 0) {
      return 1;
    } else if (testScore > 60 && testScore <75) {
      return 2;
    } else if (testScore >= 75 && testScore < 80) {
      return 3;
    } else if (testScore >= 80 && testScore < 90) {
      return 4;
    } else if(testScore >= 90 && testScore <= 100) {
      return 5;
    }
  }
}

switch(score()) {
  case 1:
    "F";
    break;
  case 2:
    "D";
    break;
  case 3:
    "C";
    break;
  case 4:
    "B";
    break;
  case 5:
    "A";
    break;
  default:
    "Could not compute your grade at this time."
}

3.) Fizz Buzz
Write a small program that asks a user for a number. If it''s a multiple of 3, output "fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".

var userInput;
var play;

function playAgain() {
  play = confirm('Would you like to play again?');
    if(play) {
      user();
    }
}

function user() {
  userInput = prompt('Pick a number!');
  userInput = parseInt(userInput);

  if(userInput) {
    if(userInput%3 === 0  && userInput%5 === 0) {
      alert('Fizzbuzz');
      playAgain();
    } else if (userInput%3 === 0) {
      alert('Fizz');
      playAgain();
    } else if (userInput%5 === 0) {
      alert('Buzz');
      playAgain();
    } else {
      play = confirm('You didn\'t use a number divisible by 3 or 5. Would you like to try again?');
      if(play) {
        user();
      }
    }
  } else {
    play = confirm('It looks like you didn\'t use a number...Would you like to try again?');
    if(play) {
      user();
    }
  }
}

user();

4.) BONUS!! (Not required, but give it the college try!)

- There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right".
If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3.
Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

var name = 'left';
var ticketType = 'premium';
var row;

if(ticketType.toLowerCase() === 'premium') {
  row = 'the first three rows.'
} else {
  row = 'row four or higher.'
}

console.log('Please sit in the ' + name  + ' section in ' + row);





- There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.
