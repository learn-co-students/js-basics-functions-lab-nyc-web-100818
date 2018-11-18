// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else if (distance < 42) {
    return 42 - distance;
  }
};

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else if (destination > start) {
    return (destination - start) * 264;
  }
};

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * .02;
  } else {
    return 0;
  }
};
