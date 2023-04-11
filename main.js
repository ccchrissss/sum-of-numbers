function descendingOrder(n){
  // convert number to a string
//   convert string to an array
//   sort array in descending order
//   convert array to a string
//   convert string to a number

return Number(  n.toString().split('').sort( (a, b) => b - a ).join('')  )

}

console.log(descendingOrder(123456))


// parameter: n (greater than or equal to 0)
// return: highest numerical value rearrangement of digits
// e.g. descendingOrder(12811925)
// results in 98522111
