import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import { lineList, probData } from "../types/common"
import { ChartCont } from "../styles/containerStyles"

const Chart = ({ data, lines }: { data: probData; lines: lineList }) => (
  <ChartCont>
    {data.length > 0 && (
      <ResponsiveContainer>
        <LineChart width={730} height={300} data={data}>
          <XAxis
            allowDecimals={false}
            dataKey="input"
            domain={[
              Math.floor(data[0].input),
              Math.ceil(data[data.length - 1].input),
            ]}
            type="number"
          />
          <YAxis allowDecimals={true} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {lines.map((line) => (
            <Line
              key={line.id}
              dataKey={line.id}
              stroke={line.color}
              dot={false}
              isAnimationActive={true}
              strokeWidth="1.5px"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    )}
  </ChartCont>
)

export default Chart
