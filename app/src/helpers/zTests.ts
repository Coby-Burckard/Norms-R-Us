const calcZScore = (mean: number, stdv: number, x: number): number => {
  return (x - mean) / stdv
}

const leftZTest = (mean: number, stdv: number, x: number): number => {
  const zScore = calcZScore(mean, stdv, x)
  const pValue = getZPercent(zScore)
  return pValue
}

const rightZTest = (mean: number, stdv: number, x: number) => {
  return 1 - leftZTest(mean, stdv, x)
}

const twoSidedZTest = (
  mean: number,
  stdv: number,
  left: number,
  right: number
) => {
  return leftZTest(mean, stdv, left) + rightZTest(mean, stdv, right)
}

const getZPercent = (z: number): number => {
  //z == number of standard deviations from the mean

  //if z is greater than 6.5 standard deviations from the mean
  //the number of significant digits will be outside of a reasonable
  //range
  if (z < -6.5) return 0.0
  if (z > 6.5) return 1.0

  let factK = 1
  let sum = 0
  let term = 1
  let k = 0
  let loopStop = Math.exp(-23)
  while (Math.abs(term) > loopStop) {
    term =
      (((0.3989422804 * Math.pow(-1, k) * Math.pow(z, k)) /
        (2 * k + 1) /
        Math.pow(2, k)) *
        Math.pow(z, k + 1)) /
      factK
    sum += term
    k++
    factK *= k
  }
  sum += 0.5

  return sum
}

export { leftZTest, rightZTest, twoSidedZTest }
