// Code your solution in this file!
const hqLocation = 42;
 function distanceInBlocks(start, destination) {
  return Math.abs(start - destination);
}
 function distanceFromHqInBlocks(start) {
  return distanceInBlocks(start, hqLocation);
}
 function distanceFromHqInFeet(start) {
  return distanceTravelledInFeet(start, hqLocation)
}
 function distanceTravelledInFeet(start, destination) {
  const blockInFeet = 264;
  return distanceInBlocks(start, destination) * blockInFeet;
}
 function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let farePrice;
  if (distance < 400) {
    farePrice = 0;
  } else if (distance >= 400 && distance <= 2000) {
    farePrice = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    farePrice = 25;
  } else {
    farePrice = 'cannot travel that far'
  }
  return farePrice;
} 