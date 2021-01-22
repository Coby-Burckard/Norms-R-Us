type inputs = {
  mean: number
  stdv: number
}

const getInputs = (min: number, max: number, points: number): number[] => {
  const inputs = []
  const range = max - min

  for (let i = min; i < max; i += range / points) {
    inputs.push(i)
  }

  return inputs
}

const generateProbabilityData = ({ mean, stdv }: inputs) => {
  const data = []
  const min = mean - 4 * stdv
  const max = mean + 4 * stdv

  const probFunc = (x: number) =>
    Math.pow(Math.E, ((-1 / 2) * Math.pow(x - mean, 2)) / Math.pow(stdv, 2)) /
    (stdv * Math.pow(2 * Math.PI, 1 / 2))

  const inputs = getInputs(min, max, 100)

  inputs.forEach((input) => {
    data.push({
      input,
      prob: probFunc(input),
    })
  })
}

export { generateProbabilityData }
