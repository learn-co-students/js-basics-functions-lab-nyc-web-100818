// Code your solution in this file!
function distanceFromHqInBlocks(block){
  let dist = block - 42;
  return Math.abs(dist)
}


function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(pickup, dropoff){
  let dist = pickup - dropoff;
  return Math.abs(dist) * 264
}


function calculatesFarePrice(start, dest){
  if (distanceTravelledInFeet(start, dest) > 2500) {
    return "cannot travel that far"
  }
  else if (distanceTravelledInFeet(start, dest) > 2000){
      return 25
  }
  else if (distanceTravelledInFeet(start, dest)< 400) {
    return 0
  }
  else {
    return (distanceTravelledInFeet(start, dest) - 400) *.02
  }
}

// Second, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.
