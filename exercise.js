var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3

function displayPerson(fname, lname){ // 6, 7
  var prefix = 'Mr'; //6, 7
debugger  var fullName = null;  //6, 7

  function getFullName(){ 
    var suffix = "Esq."; //// 8, 9
   return  fullName = prefix + " " + fname + " " + lname + " " + suffix; //
  };

  return getFullName(); 

};

function removeYears(){ 
  var minusYears = 10, age = 49;
  return age - minusYears;
};

console.log(displayPerson(firstName, lastName)); // 4, 5
console.log(removeYears());
