import React, { useEffect, useReducer, useState } from "react"
import { generateProbabilityData } from "../helpers/generateData"
import Chart from "./Chart"
import LineInputs from "./LineInputs"
import DisplayLines from "./DisplayLines"

import { lineList, probData } from "../types/common"
import lineListReducer from "../reducers/lineList"
import TestInputs from "./TestInputs"

const initialLines: lineList = [
  {
    id: "1",
    name: "example",
    mean: 0,
    stdv: 1,
    color: "#3CAEA3",
    zScore: "-",
    pValue: "-",
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
      <LineInputs lines={lines} dispatch={dispatch} />
      <TestInputs lines={lines} dispatch={dispatch} />
      <DisplayLines lines={lines} dispatch={dispatch} />
    </div>
  )
}

export default ChartContainer
