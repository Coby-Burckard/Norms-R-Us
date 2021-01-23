import React, { useEffect, useReducer, useState } from "react"
import { generateProbabilityData } from "../helpers/generateData"
import Chart from "./Chart"
import InputBlock from "./LineInputs"
import DisplayLines from "./DisplayLines"

import { lineList, probData } from "../types/common"
import lineListReducer from "../reducers/lineList"

const initialLines: lineList = [
  {
    id: "1",
    name: "example",
    mean: 0,
    stdv: 1,
    color: "#3CAEA3",
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
      <DisplayLines lines={lines} dispatch={dispatch} />
    </div>
  )
}

export default ChartContainer
