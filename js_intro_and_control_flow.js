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

---answer---

friends.push("Sue");
friends.unshift("Gertrude");
friends[6]="Liz";
friends[5]="Emma";

------------

2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above

---answer---

friends.sort();

------------

3.) Challenge Problem: Here are a list of `ages`

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)

---answer---

function compareNumbers(a,b){
    return a - b;
}

ages.sort(compareNumbers);

var median = ages[parseInt(ages.length/2)];
console.log(median);

------------


4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

---answer---

friends.split(",").sort;

------------



5.) List all the `friends` above in reverse alphabetical order.


---answer---

friends.split(",").sort().reverse();

------------




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


---answer---

myFriends.concat(yourFriends).sort();

------------


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


---answer---

foods.indexOf('Crab') + 1

------------







8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

---answer---

foods.splice(foods.indexOf('Donuts'),1);
console.log(foods);

------------




9.) My friends want to know what my `5`th to `10`th favorite foods are.

---answer---

foods.slice(4,10);

------------






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

---answer---

Initially, I thought an associative array with a named index should
be created.  I then discovered that Javascript does not support
arrays with a named index.  So, to store the info in an array,
an array of arrays can be used.


var peoplesAges = [['Moe',18],['Larry',19],['Curly',20],['Jane',20]] ...


------------



##Javascript Control Flow Exercises

1.) Nightclub Bouncer

Using an if/else expression, create a script that prompts the user for their age, then:

  * If the user is older than 18, he/she should receive a message that he/she may enter.
  * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
  * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
  * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.


---answer---

var age = prompt("how old are you?");

access = age >=21 ? console.log("Come on in and party away!") : age >=18 && age < 21 ? console.log("You may enter, but no drinking for you") : console.log("Bummers - You are too young to enter.");

------------








2.) Grade.js
Output the following letter grade from a variable with with a test score.

Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a `switch` statement.

---answer---

var score = prompt("What is your score?");
var grade;

switch(true) {
    case (score < 60):
        grade = "F";
        console.log("Your grade is F.  Better luck next time.");
        break;

    case (score < 70):
        grade = "D";
        console.log("Your grade is D. Try again - you can do it!");
        break;

    case (score < 80):
        grade = "C";
        console.log("Your grade is C. Not bad - keep plugging away!");
        break;

    case (score < 90):
       console.log("Your grade is B.  Well done - I see an A in your future.");
       grade = "B";
        break;

    default:
        grade = "A";
        console.log("Your grade is A. Nice!! Keep up the good work!!");
}

console.log("Your final grade is ." + grade);

------------

3.) Fizz Buzz
Write a small program that asks a user for a number. If it's a multiple of 3, output "fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".

---answer---

var number = prompt("enter a number");
((number % 3 === 0) && (number % 5 === 0)) ? console.log("FizzBuzz") : (number % 3 === 0) ? console.log("Fizz"): (number % 5 === 0) ? console.log("Buzz") : console.log("not a multiple of 3");


      OR (not sure which one is preferable)


var number = prompt("enter a number");

if ((number % 3 === 0) && (number % 5 === 0)) {
    console.log("FizzBuzz");
}
else if (number % 3 === 0) {
    console.log("Fizz");
}
else if (number % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log("This number is not a multiple of 3 or 5");
}

------------


4.) BONUS!! (Not required, but give it the college try!)

- There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

---answer---  This is long-winded. Need to learn how to be more efficient


var attendeeName = "Chris Anderson";
var ticketType = "standard";
var section = ["left", "middle", "right"];

//splits first name and last name
var lastName = attendeeName.split(" ");

//gets the last name
var lastNameAlone = lastName[1];

//splits the letters of the last name
var lastNameAloneSplit = lastNameAlone.split("");

//converts the letter to lowercase
var lastNameFirstLetter = lastNameAloneSplit[0].toLowerCase();



//determines where the attendee can sit
switch(true) {
    case ((lastNameFirstLetter < "j") && (ticketType !== "premium")):
        console.log(attendeeName + " sits beyond the first 3 rows in the left section.");
        break;
    case ((lastNameFirstLetter < "j") && (ticketType === "premium")):
        console.log(attendeeName + " sits in the first 3 rows in the left section.");
        break;
    case ((lastNameFirstLetter < "s") && (ticketType !== "premium")):
        console.log(attendeeName + " sits beyond the first 3 rows in the middle section.");
        break;
    case ((lastNameFirstLetter < "s") && (ticketType === "premium")):
        console.log(attendeeName + " sits in the first 3 rows in the middle section.");
        break;
    case ((lastNameFirstLetter <= "z") && (ticketType === "premium")):
        console.log(attendeeName + " sits in the first 3 rows in the right section.");
        break;
    default:
        console.log(attendeeName + " sits beyond the first 3 rows in the right section.");
}





- There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.
//variables
var ticketType = "premier plus";
var discountType = "veterans";
var ticketPrice;

//checks ticketType
if(ticketType === "standard") {
    ticketPrice = 50;
}
else if(ticketType === "premier") {
    ticketPrice = 65;
}
else if(ticketType === "premier plus"){
    ticketPrice = 85;
}
else {
    console.log("not a valid ticket type")
}

//checks and if applicable applies the discount
if ((discountType === "seniors") || (discountType === "veterans") || (discountType === "students")) {
    ticketPrice = (ticketPrice - 10);
}

console.log(ticketPrice);









