//JS IS THE WILD WEST AND I AM THE WILD COWBOY i will use ternarys if they are V. SIMPLE conditionals and cleaner!

function distanceFromHqInBlocks(blocks) {
  return (blocks > 42) ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}


//choose my own adventure: | a = start | && | b = destination |
// 1 block =  264'..
function distanceTravelledInFeet(a, b) {
  return a < b ? (b - a) * 264 : (a - b) * 264;
}


//given distanceTravelledInFeet(start, finish)
//return customer cost('fare')
function calculatesFarePrice(a, b) {
  const distance = distanceTravelledInFeet(a, b);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400); //$0.02/foot under these conditions
  } else if (distance > 2000 && distance < 2500) {
    return 25; //charge 25 dollars if dist > 2000'
  } else {
    return 'cannot travel that far';
  }
}
