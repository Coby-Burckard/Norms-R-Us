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
  const [mean, setMean] = useState(0)
  const [stdv, setStdv] = useState(1)
  const [data, setData] = useState<probData | undefined>(
    generateProbabilityData({ mean, stdv })
  )

  const [lines, dispatch] = useReducer(lineListReducer, initialLines)

  return (
    <div>
      <Chart mean={mean} stdv={stdv} data={data} />
      <InputBlock lines={lines} dispatch={dispatch} />
    </div>
  )
}

export default ChartContainer
