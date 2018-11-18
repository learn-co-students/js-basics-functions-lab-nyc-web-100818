// Code your solution in this file!

function distanceFromHqInBlocks(number) {
  return Math.abs(number - 42)
}

function distanceFromHqInFeet(number) {
  return distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet(start_block, end_block) {
  return Math.abs(start_block - end_block) * 264
}

function calculatesFarePrice(start, destination) {
  const trip = distanceTravelledInFeet(start, destination)

  if (trip < 400) {
    return 0;
  } else if (trip < 2000) {
    return parseFloat(((trip * 0.02) - 400 * 0.02).toFixed(2));
  } else if (trip < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
