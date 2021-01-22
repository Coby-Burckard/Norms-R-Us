import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"

const Chart = ({
  mean,
  stdv,
  data,
}: {
  mean: number
  stdv: number
  data: any
}) => (
  <LineChart width={730} height={250} data={data}>
    <XAxis
      allowDecimals={false}
      dataKey="input"
      domain={[mean - 6 * stdv, mean + 6 * stdv]}
      type="number"
    />
    <Line dataKey="prob" stroke="#24A0ED" dot={false} />
  </LineChart>
)

export default Chart
