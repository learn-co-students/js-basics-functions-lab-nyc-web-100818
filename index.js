// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if (someValue > 42){
    return someValue - 42;
  } else {
  return 42 - someValue;
  }
}
function distanceFromHqInFeet(someValue) {
  let numBlocks = distanceFromHqInBlocks(someValue);
  return numBlocks * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(val1, val2) {
  if (val2 > val1){
    let numBlocks = val2 - val1
    return numBlocks * 264;
  } else {
    let numBlocks = val1 - val2
    return numBlocks * 264;
  }
}

function calculatesFarePrice(start, destination){
  let feetDistance = distanceTravelledInFeet(start, destination);
  if (feetDistance <= 400){
    return 0
  } else if (feetDistance > 400 && feetDistance < 2000){
    distanceCharged = feetDistance - 400;
    return distanceCharged * 0.02;
  } else if (feetDistance > 2000 && feetDistance < 2500)
    return 25;
  else{
      return 'cannot travel that far'
  }
}
