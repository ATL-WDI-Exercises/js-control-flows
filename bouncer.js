function fizzBuzz(number) {
  if (number % 15 === 0) {
    console.log('fizzbuzz')
  } else if (number % 3 === 0) {
    console.log('fizz')
  } else if (number % 5 === 0) {
    console.log('buzz')
  }
}

var number = prompt("whats a good number?")
fizzBuzz(number)
