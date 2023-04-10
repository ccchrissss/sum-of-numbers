function solution(start, finish) {

  // declare variable called stepsToJump with value of finish minus start
  // declare variable called jumps
  // find remainder of stepsToJump divided by 3
  // conditional: if remainder is 0 return stepsToJump
  // if remainder is 2, add 2 to stepsToJump and return
  // if remainder is 1, add 1 to stepsToJump and return

  let stepsToJump = finish - start
  let jumps

  if (stepsToJump % 3 == 0) {
    jumps = stepsToJump / 3
  } else if (stepsToJump % 3 == 2) {
    jumps = Math.floor(stepsToJump / 3) + 2
  } else if (stepsToJump % 3 == 1) {
    jumps = Math.floor(stepsToJump / 3) + 1
  }

  return jumps
  
} 
