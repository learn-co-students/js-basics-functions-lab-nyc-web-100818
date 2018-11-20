// Code your solution in this file!

function distanceFromHqInBlocks(num) {
  return Math.max(42, num) -Math.min(42, num);
}

function distanceFromHqInFeet(num) {
  return (Math.max(42, num) -Math.min(42, num)) * 264;
}


function distanceTravelledInFeet(num1, num2) {
  return (Math.max(num1, num2) - Math.min(num1, num2)) * 264
}

function calculatesFarePrice(start, destination) {
  const num = (Math.max(start, destination) - Math.min(start, destination)) * 264
  if (num <= 400) {
    return 0;
  }
  else if (num > 2500) {
    return 'cannot travel that far';
  } else if (num > 2000 && num < 2500) {
    return 25;
  } else {
    let remove_free = (num - 400);
    return remove_free * 0.02;
  }
}
