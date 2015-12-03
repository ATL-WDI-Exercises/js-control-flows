function grade(points) {
  switch(true) {
    case (points >= 90):
      return 'A'
      break;
    case ((points >= 80) && (points <= 89)):
      return 'B'
      break;
    case ((points >= 70) && (points <= 79)):
      return 'C'
      break;
    case ((points >= 60) && (points >= 69)):
      return 'D'
      break;
    default:
      return 'F'
    }
}

console.log(grade('87'))
