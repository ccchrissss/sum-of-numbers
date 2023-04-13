function SeriesSum(n) {

  let arrayIntegers = [1]
  let arrayCompleteSeries = [1]

  for (i = 0; i < n; i++) {
    arrayIntegers.push(arrayIntegers[i] + 3)
  }

  for (i = 1; i < n; i++) {
    arrayCompleteSeries.push(1 / arrayIntegers[i])
  }
  
  // console.log(arrayCompleteSeries)

  if (n == 0) {
    return '0.00'
  } else {
    return arrayCompleteSeries.reduce( (acc, c) => acc + c).toFixed(2).toString()
  }

}