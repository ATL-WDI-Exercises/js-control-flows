/*
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
my answers are as follows:
*/

friends.push("sam");

friends.unshift("annotherName");

var index = friends.indexOf("Elizabeth");

if (index !== -1) {
    friends[index] = "Liz";
}

/*RESULT:

Native Browser JavaScript
   
[ 'annotherName',
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
  'sam' ]
   


2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above

//Im thinking that the sort will place them in alphabetical order...but it turns out that its some sort of UpperCaseFirstAlphabetical Order
*/
   
[ 'Curly',
  'Darcy',
  'Elinor',
  'Emma',
  'Grey',
  'Harriet',
  'Jane',
  'Larry',
  'Liz',
  'Lydia',
  'Mary',
  'Moe',
  'annotherName',
  'sam' ]*/


/*
3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)

//from: https://gist.github.com/caseyjustus/1166258
*/

function median(ages) {

    ages.sort( function(a,b) {return a - b;} );

    var half = Math.floor(ages.length/2);

    if(ages.length % 2)
        return ages[half];
    else
        return (ages[half-1] + ages[half]) / 2.0;
}

median(ages); // returns 51


/*

4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.
 
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

*/

var friendsArray = friends.split(",");

console.log(friendsArray);


// 5.) List all the `friends` above in reverse alphabetical order.

friendsArray.sort();

friendsArray.reverse();

console.log(friendsArray);


[ 'Moe',
  'Mary',
  'Lydia',
  'Larry',
  'Jane',
  'Harriet',
  'Grey',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Darcy',
  'Curly' ]


//6.) We have two lists of friends below. We need to combine them into one list and sort them:

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


[ 'Bilbo',
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

/*
7.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, 
then how would you find the rank of another food. Hint: go to MDN to find an array method for finding the 
index of something in the array.
*/

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

foods.indexOf('Ice cream');  //will return a response that Ice cream is in the 14th position.

//8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

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

foods.indexOf('Donuts');  //will return a response that Ice cream is in the 13th position.

foods.splice(13,1); //will remove 1 entry from 13th position

//9.) My friends want to know what my `5`th to `10`th favorite foods are.

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
              'Brownie'
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

foods.slice(5,10);

//10.) How would you create an array that efficiently stored the following information:

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

 



  var NamesAndAges = [
    'Moe' : 18;
    'Larry' : 19;
    'Curly' : 20;
    'Jane':20;
    'Emme':21;
    'Elizabeth':18;
    'Elinor':23;
    'Mary':25;
    'Darcy':24;
    'Grey':18;
    'Lydia':24;
    'Harriet':18;
  ]




/*
##Javascript Control Flow Exercises

1.) Nightclub Bouncer

Using an if/else expression, create a script that prompts the user for their age, then:

  * If the user is older than 18, he/she should receive a message that he/she may enter.
  * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
  * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
  * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.

  //myAnswer
*/

    var age = prompt("Good Evening, please enter your age",16);
    
    if ("age" < 18) {
      console.log ("You have got to be 18 to enter");
    } else if ("age" >= 18 && "age" < 21) {
      console.log ("Welcome, and please remember that your privledges are limited.");
    } else {
      console.log ("Welcome, enjoy your evening.");
    }


/*
2.) Grade.js
Output the following letter grade from a variable with with a test score. 

Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. 
Try and use a `switch` statement.

I need help on this: 
var userInput  = prompt("enter your score and recieve your letter grade:");

switch (userInput) {
  case 1:
    userInput >= 90;
    console.log("A");
    break;

  case 2:
    userInput >= 80;
    console.log("B");
    break;

  case 3:
   userInput >= 70;
    console.log("C");
    break;

  case 4:
    userInput >= 60;
    console.log("D");
    break;

    case 5:
   userInput < 60;
    console.log("F");
    break;
}
*/
var userInput  = prompt("enter your score and recieve your letter grade:");

if (userInput >= 90) {
    console.log("your letter grade is A");
} else if (userInput >= 80) {
    console.log("your letter grade is B");
} else if (userInput >= 70) {
    console.log("your letter grade is C");
} else if (userInput >= 60) {
    console.log("your letter grade is D");
} else {
    console.log("your letter grade is F");
}




/*
3.) Fizz Buzz
Write a small program that asks a user for a number. If it's a multiple of 3, output "fizz". If it's a multiple of 5, output "buzz". 
If its a multiple of 3 and 5, output "Fizzbuzz". 
*/


var number = prompt ("enter any positive integer:");
if (number % 3 === 0 && number % 5 === 0) {
console.log("FizzBuzz");

}

else if( number % 3 === 0) {
console.log("Fizz");
}
else if (number % 5 === 0) {
console.log("Buzz");
}
else {
console.log("neither a factor of 3, nor 5");
}

/*
4.) BONUS!! (Not required, but give it the college try!)

- There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". 
If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. 
Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.
*/

var name = prompt("please enter your last name:");
var ticketType = prompt("do you have a premium ticket, yes or no?");
console.log ("you entered " + name);
console.log(name.charAt(0));

    if (name.charAt(0) == "a" || name.charAt(0) == "b" || name.charAt(0) == "c" || name.charAt(0) =="d" ||name.charAt(0) == "e" ||name.charAt(0) == "f" ||name.charAt(0) == "g" || name.charAt(0) == "h") {
        console.log("your seat is in the left section.");
    } else if (name.charAt(0) == "i" || name.charAt(0) == "j" || name.charAt(0) == "k" ||name.charAt(0) == "l" ||name.charAt(0) == "m" ||name.charAt(0) == "n" ||name.charAt(0) == "o" ||name.charAt(0) == "p" ||name.charAt(0) == "q") {
        console.log("your seat is in the middle section.");
    } else {
        console.log("your seat is in the right section.")
    }
    
    if (ticketType == "yes") {
        console.log("you may sit in any of the 1st three rows in your section");
    } else {
        console.log("you may sit any any of the rows beginning with row 4.  The first three rows are for premium seating"); 
    }


/*
- There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. 
Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount.
 Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.
 */

var standard = 65;
var premium = 75;
var premiumPlus = 85;
var ticketPrice = 0;
var discountAmount = 0;

var ticketType = prompt ("press 1 for the price of a standard ticket\npress 2 for the price of a premium ticket \npress 3 for the price of a premiumPlus ticket" );
console.log("you entered " + ticketType);

var discountType = prompt("are you a senior citizen,\na veteran,\nor a student? \nyes or no");                           
                          
    
if ( discountType.charAt(0) === "y" || discountType.charAt(0) === "Y"){
    discountAmount = -10;
}

if (ticketType === "1"){
    ticketPrice = standard + discountAmount;
} else if (ticketType === "2") {
    ticketPrice = premium + discountAmount;
} else if (ticketType === "3") {
    ticketPrice = premiumPlus + discountAmount;
}

console.log("the price of your ticket is " + ticketPrice );