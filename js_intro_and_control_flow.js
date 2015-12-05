Intro to Javascript

1.) Find the last name in the following array:

var lastItem = friends[friends.length - 1]);

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

friends.push("Chad");
friends.unshift("James");
friends[5] = "Liz";







2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above



friends.sort();





3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)


ages.sort(function(a,b){
    return a-b;
});

var half = Math.floor(ages.length / 2);

if (ages.length % 2) {
    console.log(ages[half]);
} else {
    console.log((ages[half-1] + ages[half]) / 2.0);
};





4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

var friendsToArray = friends.split(',');

friendsToArray.sort();

console.log(friendsToArray);







5.) List all the `friends` above in reverse alphabetical order.

friendsToArray.reverse();
console.log(friendsToArray);








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


var ourFriends = myFriends.concat(yourFriends);
ourFriends.sort();
console.log(ourFriends);



7.) I have a list of favorite foods below. If `Popcorn` is my favorite food
and `Potato chips` my second favorite, then how would you find the rank of another food.
Hint: go to MDN to find an array method for finding the index of something in the array.

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

console.log(foods.indexOf("Sushi"));










8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

var index = foods.indexOf("Donuts");
foods.splice(index, 1);
console.log(foods);




9.) My friends want to know what my `5`th to `10`th favorite foods are.

console.log(foods.slice(4, 10));






10.) How would you create an array that efficiently stored the following information:

var ages = {
  'Moe' : 18,
  'Larry' : 19,
  'Curly' : 20,
  'Jane' : 20,
  'Emma' : 21,
  'Elizabeth' : 18,
  'Elinor' : 23,
  'Mary' : 25,
  'Darcy' : 24,
  'Grey' : 18,
  'Lydia' : 24,
  'Harriet' : 18
}



##Javascript Control Flow Exercises

1.) Nightclub Bouncer

Using an if/else expression, create a script that prompts the user for their age, then:

  * If the user is older than 18, he/she should receive a message that he/she may enter.
  * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
  * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
  * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.


var age = parseInt(prompt("What is your age"));

if (age > 21) {
  alert("You can enter and drink... responsibly");
} else if ( age > 18 && age < 21 ) {
  alert("You can enter but you may not drink");
} else if ( age > 18 ) {
  alert("You may enter");
} else if ( age < 18 ) {
  alert("You can't enter because you are too younng");
}











2.) Grade.js
Output the following letter grade from a variable with with a test score.

Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a `switch` statement.












3.) Fizz Buzz
Write a small program that asks a user for a number. If it's a multiple of 3, output "fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".












4.) BONUS!! (Not required, but give it the college try!)

- There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

- There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.
