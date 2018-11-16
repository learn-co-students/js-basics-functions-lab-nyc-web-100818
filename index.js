// Code your solution in this file!
function distanceFromHqInBlocks(d) {
  const hq = 42;
  if (d > 42) {
    return (d - hq);
  } else {
    return (hq - d); // so we don't get negative distance
  }
}

function distanceFromHqInFeet(d) {
  return distanceFromHqInBlocks(d) * 264; // each city block is 264 feet
}

function distanceTravelledInFeet(pointA, pointB) {

  if (pointA > pointB) {
    return (pointA - pointB) * 264;
  } else {
    return (pointB - pointA) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  // use previous function's return value
  let feetTravelled = distanceTravelledInFeet(start, destination)
  ;

  if (feetTravelled <= 400) {
    return 0;
  }
  else if (feetTravelled < 2000 && feetTravelled > 400 ) {
    return (feetTravelled - 400) * 0.02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}


// Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
