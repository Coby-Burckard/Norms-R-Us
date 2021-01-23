type probData = {
  input: number
  [key: string]: number | string
}[]

type lineList = {
  id: string
  color: string
  name: string
  mean: number
  stdv: number
  zScore: number | string
  pValue: number | string
}[]

export type { probData, lineList }
