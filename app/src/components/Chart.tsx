import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

type props = {
  data: {
    name: string;
    [keys: string]: number | string;
  }[];
}

const Chart = ({data}: props) => {
  
  return (
    <div>
      hello with {data[0].name}
    </div>
  )
}

export default Chart