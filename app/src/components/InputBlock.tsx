import React, { Dispatch, useState } from "react"
import { LinesAction } from "../reducers/lineList"
import { lineList } from "../types/common"

type Props = {
  dispatch: Dispatch<LinesAction>
  lines: lineList
}

const InputBlock = ({ dispatch, lines }: Props) => {
  const [name, setName] = useState("")
  const [mean, setMean] = useState(0)
  const [stdv, setStdv] = useState(1)

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const updateMean = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if (!isNaN(value)) {
      setMean(value)
    }
  }

  const updateStdv = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if (!isNaN(value)) {
      setStdv(value)
    }
  }

  const addLine = () => {
    if (
      name.length > 0 &&
      typeof stdv === "number" &&
      typeof mean === "number"
    ) {
      dispatch({
        type: "ADD",
        data: {
          name,
          mean,
          stdv,
        },
      })
    } else {
      console.log("invalid submission")
    }
  }

  return (
    <div>
      <input value={name} onChange={updateName} placeholder="name" />
      <input value={mean} onChange={updateMean} placeholder="mean" />
      <input value={stdv} onChange={updateStdv} placeholder="stdv" />
      <button onClick={addLine}>Add</button>
      {lines.map((line) => (
        <p key={line.id}>{line.name}</p>
      ))}
    </div>
  )
}

export default InputBlock
