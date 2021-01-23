import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"
import { lineList, probData } from "../types/common"

const Chart = ({ data, lines }: { data: probData; lines: lineList }) => {
  const colors: string[] = [
    "#3CAEA3",
    "#20639B",
    "#F6D55C",
    "#173F5F",
    "#ED553B",
  ]

  return (
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
          {lines.map((line, index: number) => (
            <Line
              key={line.id}
              dataKey={line.id}
              stroke={colors[index % colors.length]}
              dot={false}
              isAnimationActive={true}
              strokeWidth="1.5px"
            />
          ))}
        </LineChart>
      )}
    </>
  )
}

export default Chart
