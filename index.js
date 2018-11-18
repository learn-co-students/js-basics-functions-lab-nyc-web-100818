function distanceFromHqInBlocks (distance) {
  let blocks;

  if (distance > 42) {
  blocks = distance - 42
  }
  else if (distance < 42) {
    blocks = 42 - distance
  }
  return blocks;
} //end of function

function distanceFromHqInFeet(distance) {
  let feet;

  if (distance > 42) {
  feet = (distance - 42) * 264
  }
  else if (distance < 42) {
  feet = (42 - distance) * 264
  }
  return feet;
}//end of function

function distanceTravelledInFeet(start, end) {
  if ((end - start) < 0) {
      return (start-end) * 264;
    }
    else {
      return (end-start) * 264;
    }
  }//end of function

  function calculatesFarePrice(start, destination) {
    let fare;
    let feetDistance = distanceTravelledInFeet(start, destination);

    if (feetDistance < 400) {
      fare = 0;
    }
    else if (feetDistance < 2000) {
    fare = (feetDistance - 400) * 0.02;
    }
    else if (feetDistance > 2000 && feetDistance < 2500) {
      fare = 25
    }
    else {
      fare = 'cannot travel that far';
    }
    return fare;
  } //end of function
