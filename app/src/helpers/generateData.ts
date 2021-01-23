import { lineList } from "../types/common"

type inputs = {
  mean: number
  stdv: number
}

const findMinMax = (lines: lineList): { min: number; max: number } => {
  if (lines.length < 1) {
    return { min: 0, max: 0 }
  }

  let min: number = lines[0].mean
  let max: number = lines[0].mean

  lines.forEach(({ mean, stdv }) => {
    const localMin = mean - 4 * stdv
    const localMax = mean + 4 * stdv

    if (min === null || localMin < min) {
      min = localMin
    }

    if (max === null || localMax > max) {
      max = localMax
    }
  })

  return {
    min,
    max,
  }
}

const getInputs = (min: number, max: number, points: number): number[] => {
  const inputs = []
  const range = max - min

  for (let i = min; i < max; i += range / points) {
    inputs.push(i)
  }

  return inputs
}

const probFunc = (x: number, mean: number, stdv: number): number => {
  return (
    Math.pow(Math.E, ((-1 / 2) * Math.pow(x - mean, 2)) / Math.pow(stdv, 2)) /
    (stdv * Math.pow(2 * Math.PI, 1 / 2))
  )
}

const generateProbabilityData = (lines: lineList) => {
  if (lines.length < 1) {
    return []
  }

  const data: { input: number; [key: string]: number }[] = []

  //obtaining an overall min and max and the input points
  const { min, max } = findMinMax(lines)
  const inputs = getInputs(min, max, 200)

  //building the data for each input
  inputs.forEach((input) => {
    const lineProbs: { [key: string]: Number } = {}

    lines.forEach(({ id, mean, stdv }) => {
      lineProbs[id] = probFunc(input, mean, stdv)
    })

    data.push({
      input,
      ...lineProbs,
    })
  })

  return data
}

export { generateProbabilityData }
