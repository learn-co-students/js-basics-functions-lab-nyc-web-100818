// Code your solution in this file!
function distanceFromHqInBlocks (distance){
  if (distance > 42) {
    return distance - 42;
  }
  else if (distance < 42) {
    return 42 - distance;
  }
}
function distanceFromHqInFeet(distance) {
  if (distance > 42) {
    return (distance - 42) * 264;
  }
  else if (distance < 42) {
    return (42 - distance) * 264;
  }
}
function distanceTravelledInFeet(start, end) {
  if ((end - start) < 0) {
    return (start-end) * 264;
  }
  else {
    return (end-start) * 264;
  }
}
function calculatesFarePrice (start, end) {
  let northFare = (end - start) * 264
  let southFare = (start - end) * 264
  if (northFare > 0 ) {
    if (northFare > 2000 && northFare < 2500) {
      return 25;
    }
    else if (northFare > 400 && northFare < 2000) {
      return (northFare - 400) * .02;
    }
    else if (northFare > 2500) {
      return 'cannot travel that far';
    }
    else if (northFare < 400) {
      return 0
    }
  }
  else if (northFare < 0) {
    if ( 2500 > southFare > 2000) {
      return 25;
    }
    else if (southFare > 400 && southFare < 2000) {
      return (southFare - 400) * .02;
    }
    else if (southFare > 2500) {
      return 'cannot travel that far';
    }
    else if (southFare < 400) {
      return 0;
    }
  }
}
