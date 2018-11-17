// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const hq = 42;
  if (location > hq) {
    return (location - hq)
  } else if (location < hq) {
    return (hq - location)
  };
};

function distanceFromHqInFeet(location) {
  return (distanceFromHqInBlocks(location) * 264);
};
function distanceTravelledInFeet(start, end) {
  let blocks = 0;
  if (start > end) {
    blocks = (start - end);
  } else if (end > start) {
    blocks = (end - start);
  };
  return (blocks * 264)
};

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet < 400) {
    return 0;
  } else if (distanceInFeet >= 400 && distanceInFeet < 2000) {
    return (0.02 * (distanceInFeet - 400));
  } else if (distanceInFeet >= 2000 && distanceInFeet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
};
