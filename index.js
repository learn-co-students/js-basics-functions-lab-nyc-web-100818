const headquarters = 42;

function distanceFromHqInBlocks(distance) {
 return (distance > headquarters) ? distance - headquarters : headquarters - distance;
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end) {
  return (start > end) ? (start - end)*264 : (end - start)*264;
}

function calculatesFarePrice(start, destination) {

  let travelDistance = distanceTravelledInFeet(start, destination);
    if (travelDistance < 400) {
      return 0;
    }
    else if (travelDistance > 400 && travelDistance < 2000) {
      return (travelDistance - 400) * 0.02;
    }
    else if (travelDistance > 2000 && travelDistance < 2500) {
      return 25;
  } else {
      return 'cannot travel that far';
  }
}
