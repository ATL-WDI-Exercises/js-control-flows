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

// Answer:
console.log(friends[friends.length - 1]);
=> Harriet

Add your name to the end of the `friends` and add another name to beginning. Change the `Elizabeth` to `Liz`.

// Answer:
friends.push('Jeff');
friends.unshift('Bilbo');
friends[6] = 'Liz';
console.log(friends);

=> [ 'Bilbo',
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Liz',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet',
  'Jeff' ]



2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above

// Answer:
friends.sort();

=> [ 'Bilbo',
  'Curly',
  'Darcy',
  'Elinor',
  'Emma',
  'Grey',
  'Harriet',
  'Jane',
  'Jeff',
  'Larry',
  'Liz',
  'Lydia',
  'Mary',
  'Moe' ]



3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)

// Answer:
ages.sort(function(a,b) {return (a - b)});

middleNum = ages.length / 2;
if (middleNum !== 0) {
    var index = ((ages.length - 1) / 2);
} else if (middleNum === 0) {
    var index = ((Math.floor(middleNum) + Math.ceil(middleNum)) / 2);
}
console.log(ages[index]);

=> 51



4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

// Answer- convert to array and then manipulate as an array:
friends.split(',');
=> [ 'Moe',
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
  'Harriet' ]



5.) List all the `friends` above in reverse alphabetical order.

// Answer:
friends.split(',').sort().reverse().join();
=> 'Moe,Mary,Lydia,Larry,Jane,Harriet,Grey,Emma,Elizabeth,Elinor,Darcy,Curly'



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

// Answer:
var ourFriends = myFriends.concat(yourFriends);
ourFriends.sort();

=> [ 'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Hodor',
  'Jojen',
  'Jon',
  'Jory',
  'Legolas',
  'Maester',
  'Meera',
  'Osha',
  'Pippin',
  'Rickard',
  'Rickon',
  'Rodrik',
  'Septa' ]



7.) I have a list of favorite foods below. If `Popcorn` is my favorite food and
`Potato chips` my second favorite, then how would you find the rank of another
food. Hint: go to MDN to find an array method for finding the index of something
in the array.

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

// Answer: use the indexOf() method. Ex:
foods.indexOf('Donuts');
=> 13



8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

// Answer:
var oops = foods.indexOf('Donuts');
foods.splice(oops,1);
console.log(foods);

=> [ 'Popcorn',
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
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza' ]



9.) My friends want to know what my `5`th to `10`th favorite foods are.

// Answer:
for (var i = 5; i <= 10; i++) {
    console.log(foods[i]);
}

=> Tacos
   Toast
   French Toast
   Crab
   Pho
   Lasagna



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

// Answer: use a multidimensional array
var friends = [['Moe', 18], ['Larry', 19], ['Curly', 20], ['Jane', 20], ['Emma', 21],
['Elizabeth', 18], ['Elinor', 23], ['Mary', 25], ['Darcy', 24], ['Grey', 18], ['Lydia', 24],
['Harriet', 18]];


##Javascript Control Flow Exercises

1.) Nightclub Bouncer

Using an if/else expression, create a script that prompts the user for their age, then:

  * If the user is older than 18, he/she should receive a message that he/she may enter.
  * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
  * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
  * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.

// Answer
var age = prompt('How old are you?');
     if (age < 18) {
        alert('You are too young and cannot enter');
    } else if (age >= 18 && age < 21) {
        alert('You can hang out but no booze for you');
    } else if (age >= 21) {
        alert('Come on in and grab a drink');
    }



2.) Grade.js
Output the following letter grade from a variable with with a test score.

Based on the user input, display either "A", "B", "C", "D", or "F", for an score
that is an integer between 0 and 100. Try and use a `switch` statement.












3.) Fizz Buzz
Write a small program that asks a user for a number. If it's a multiple of 3, output
"fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".

// Answer
var number = prompt("Enter a number");
if (number % 15 === 0) {
    alert('fizzbuzz');
} else if (number % 3 === 0) {
    alert('fizz');
} else if (number % 5 === 0) {
    alert('buzz');
} else {
    prompt('Enter another number');
}




4.) BONUS!! (Not required, but give it the college try!)

- There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

- There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.
