// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if ((distance - 42) <0) {
    return ((distance - 42) * -1);
      }
    else {
      return (distance - 42);
      }
};


function distanceFromHqInFeet (someValue) {
    return (distanceFromHqInBlocks(someValue) * 264);
  }

function distanceTravelledInFeet(uptown, downtown){
  if (uptown - downtown < 0) {
      return ((uptown - downtown) * -1) * 264;
  }
  else {
      return ((uptown - downtown) * 264);
  }
}


function calculatesFarePrice(start, destination) {
  if ((distanceTravelledInFeet(start, destination)) < 400){
    return 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return ((distanceTravelledInFeet(start, destination) - 400) * .02);
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  } else
    return 'cannot travel that far';

}
