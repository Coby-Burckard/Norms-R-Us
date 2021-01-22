type probData = {
  input: number
  [key: string]: number | string
}[]

type lineList = {
  id: string
  name: string
  mean: number
  stdv: number
}[]

export type { probData, lineList }
