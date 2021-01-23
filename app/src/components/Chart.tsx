import React from "react"
import { LineChart, Line, XAxis, CartesianGrid, YAxis } from "recharts"
import { lineList, probData } from "../types/common"

const Chart = ({ data, lines }: { data: probData; lines: lineList }) => (
  <>
    {data.length > 0 && (
      <LineChart width={730} height={250} data={data}>
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
    )}
  </>
)

export default Chart
