import React, { useEffect, useReducer, useState } from "react"
import { generateProbabilityData } from "../helpers/generateData"
import Chart from "./Chart"
import InputBlock from "./InputBlock"

import { lineList, probData } from "../types/common"
import lineListReducer from "../reducers/lineList"

const initialLines: lineList = [
  {
    id: "1",
    name: "example",
    mean: 0,
    stdv: 1,
  },
]

const ChartContainer = () => {
  const [lines, dispatch] = useReducer(lineListReducer, initialLines)
  const [data, setData] = useState<probData>(generateProbabilityData(lines))

  useEffect(() => {
    setData(generateProbabilityData(lines))
  }, [lines])

  return (
    <div>
      <Chart lines={lines} data={data} />
      <InputBlock lines={lines} dispatch={dispatch} />
    </div>
  )
}

export default ChartContainer
