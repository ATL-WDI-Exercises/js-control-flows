console.log("Intro to Javascript");

console.log("1.) Find the last name in the following array:");

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

console.log("Add your name to the end of the `friends` and add another name to beginning. Change the `Elizabeth` to `Liz`.");

var lastName = friends[(friends.length-1)];

friends.push("Jamie");

friends.unshift("Tom");

friends.splice(6, 1, "Liz");

console.log(friends);

console.log("2.) Go to MDN and lookup `Array.sort`. Sort the list of `friends` above");

friends.sort();
console.log(friends);

console.log("3.) Challenge Problem: Here are a list of `ages`");

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

console.log("Find the `median` age. Note: the median is the middle index of the sorted array. (Hint: Lookup up on MDN `Array.sort` for numbers, and use the length of the Ages.)");

ages.sort(function (a,b) {return a - b;});

function median(arr){
  if(arr%2!==0){
    return (arr[Math.ceil((arr.length-1)/2)] + arr[Math.floor((arr.length-1)/2)])/2;
  } else {
    return arr[arr.length-1/2];
  }
}

console.log(median(ages));

console.log("4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.");

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

var friendsArray=friends.split(",");
console.log(friendsArray.sort());
console.log("Converted back to string: " + friendsArray.sort().join(","));


console.log("5.) List all the `friends` above in reverse alphabetical order.");
console.log(friendsArray.sort().reverse());


console.log("6.) We have two lists of friends below. We need to combine them into one list and sort them:");

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
var allFriends = myFriends.concat(yourFriends).sort();
console.log(allFriends);


console.log("7.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food. Hint: go to MDN to find an array method for finding the index of something in the array.");

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

console.log(foods);
function foodRankName(foodName){
  if (foods.indexOf(foodName) > -1){
    return foods.indexOf(foodName)+1;
  } else {
    return "Not on list.";
  }
}

console.log("8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)");

foods.splice(foods.indexOf("Donuts"), 1);
console.log(foods);

console.log("9.) My friends want to know what my `5`th to `10`th favorite foods are.");
function foodRankNum(num){
  return foods[num-1];
}
for(i=5; i<=10; i++){
  console.log(foodRankNum(i));
}










console.log("10.) How would you create an array that efficiently stored the following information:");

  // 'Moe' is 18
  // 'Larry' is 19
  // 'Curly' is 20
  // 'Jane' is 20
  // 'Emma' is 21
  // 'Elizabeth' is 18
  // 'Elinor' is 23
  // 'Mary' is 25
  // 'Darcy' is 24
  // 'Grey' is 18
  // 'Lydia' is 24
  // 'Harriet' is 18

var friendsObject = [
  {
    name:'Moe',
    age: 18
  },
  {
    name:'Larry',
    age: 19
  },
  {
    name:'Curly',
    age: 20
  },
  {
    name:'Jane',
     age: 20
  },
  {
    name:'Emma',
     age: 21
   },
  {
    name:'Elizabeth',
    age: 18
  },
  {
    name:'Elinor',
    age: 23
  },
  {
    name:'Mary',
     age: 25
  },
  {
    name:'Darcy',
    age: 24},
  {
    name:'Grey',
    age: 18
  },
  {
    name:'Lydia',
    age: 24
  },
  {
    name:'Harriet',
    age: 18
  }
];



// ##Javascript Control Flow Exercises

console.log("1.) Nightclub Bouncer");

// Using an if/else expression, create a script that prompts the user for their age, then:

//   * If the user is older than 18, he/she should receive a message that he/she may enter.
//   * If the user is less than 18, then he/she can't enter and should have a message telling him/her that he/she's too young.
//   * If the user is between 18 and 21, he/she should receive a message that he/she can enter, but not drink.
//   * If the user is older than 21, he/she should receive a message that he/she can both enter and drink.

function bouncer(userAge){
  if (userAge >= 18){
    if (userAge >= 21) {
      console.log("You may enter AND drink");
    } else {
      console.log("You may enter, but you cannot drink.");
    }
  } else {
    console.log("Sorry, you may not enter.");
  }
}

bouncer(12);
bouncer(19);
bouncer(44);

// 2.) Grade.js
// Output the following letter grade from a variable with with a test score.

// Based on the user input, display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a `switch` statement.

function numberGrade(grade){
  switch (true) {
    case parseInt(grade) > 100:
      return "Invalid Number Grade";
    case parseInt(grade) >=90 && parseInt(grade) <= 100:
      return "A";
    case parseInt(grade) >=80 && parseInt(grade) < 90:
      return "B";
    case parseInt(grade) >=70 && parseInt(grade) < 80:
      return "C";
    case parseInt(grade) >=60 && parseInt(grade) < 70:
      return "D";
    case parseInt(grade) >=0 && parseInt(grade) < 60:
      return "F";
    default:
      return "Invalid Number Grade";
  }
}

console.log(numberGrade(101));
console.log(numberGrade(95));
console.log(numberGrade(82));
console.log(numberGrade(70));
console.log(numberGrade(66));
console.log(numberGrade(37));
console.log(numberGrade(-12));
console.log(numberGrade("I forgot my homework"));


// 3.) Fizz Buzz
// Write a small program that asks a user for a number. If it's a multiple of 3, output "fizz". If it's a multiple of 5, output "buzz". If it's a multiple of 3 and 5, output "Fizzbuzz".

function fizzBuzz(num){
  switch (true){
    case parseInt(num)%5===0 && parseInt(num)%3===0:
      console.log("Fizzbuzz");
      break;
    case parseInt(num)%5===0:
      console.log("buzz");
      break;
    case parseInt(num)%3===0:
      console.log("fizz");
      break;
    default:
      console.log(num);
  }
}

for (var i = 0; i <= 30; i++) {
  fizzBuzz(i);
}


// 4.) BONUS!! (Not required, but give it the college try!)

// - There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.

function seatingChart(name, ticketType){
  //Section is based on first letter of name. Left: A through H, Center: I through Q, Right: R through Z.
  var firstLetter=name[0].toLowerCase(),
  left = ["a","b","c","d","e","f","g","h", "left"],
  center = ["i","j","k","l","m","n","o","p","q", "center"],
  right = ["r","s","t","u","v","w","x","y","z", "right"],
  section = [left, center, right],
  ticketSection, ticketRow;

  for (var i = 0; i < section.length; i++) {
    if (section[i].indexOf(firstLetter) > -1){
      ticketSection = section[i][section[i].length-1];
    }
  }

  if (ticketType.toLowerCase()==="premium"){
    ticketRow="in Row 1-3.";
  } else {
    ticketRow="behind Row 3.";
  }

  console.log("Welcome to the event! You are located in the " + ticketSection + " section and you may sit " + ticketRow);

}

// - There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.

// var name = ;
// var ticketType = ;

function ticketPrice(ticketType, discount){

}


