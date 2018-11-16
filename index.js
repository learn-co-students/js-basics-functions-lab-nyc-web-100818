// Code your solution in this file!
function distanceFromHqInBlocks(v){
  if (v > 42){
    return (v - 42)
  } else {
    return (42 - v)
  }
}

function distanceFromHqInFeet(v){
  return (distanceFromHqInBlocks(v) * 264)
}

function distanceTravelledInFeet(v1, v2){
  if (v1 > v2){
    return ((v1 - v2) * 264)
  } else {
    return ((v2 - v1) * 264)
  }
}

function calculatesFarePrice(v1,v2){
  var dist = (distanceTravelledInFeet(v1,v2) - 400)
  if (dist <= 0){
    return 0
  }
  else if (dist < 1600) {
    return (dist * 0.02)
  } else if (dist < 2100) {
    return 25
  } else {
    return 'cannot travel that far'
  }

}
