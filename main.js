function getSum(a, b) {

  let sum
  let sumArr = []
  let paramArr = [a, b]

  paramArr.sort( (a, b) => a - b )
  // console.log('paramArr: ', paramArr)

  for (i = paramArr[0]; i <= paramArr[1]; i++) {
    sumArr.push(i)
    // console.log('sumArr: ', sumArr)
  }

  sum = sumArr.reduce( (acc, c) => acc + c, 0)

  return sum

}

console.log(getSum(0, -1))



  // declare an empty variable called sum
  // declare an empty array called sumArr
  // declare an array called paramArr that contains a, b
  // sort paramArr in ascending order
  // create a for loop that initializes i at the value of paramArr[0]; runs when i is less than or equal to paramArr[1]; increments by 1
  // within the for loop push i to sumArr
  // assign sum to the reduce method called upon sumArr

  
  