import React, { Dispatch, useState } from "react"
import { LinesAction } from "../reducers/lineList"
import { lineList } from "../types/common"

type Props = {
  dispatch: Dispatch<LinesAction>
  lines: lineList
}

const InputBlock = ({ dispatch, lines }: Props) => {
  const [name, setName] = useState("")
  const [mean, setMean] = useState("")
  const [stdv, setStdv] = useState("")

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const updateMean = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMean(event.target.value)
  }

  const updateStdv = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStdv(event.target.value)
  }

  const addLine = () => {
    const subMean = parseInt(mean)
    const subStdv = parseInt(stdv)

    if (
      name.length > 0 &&
      typeof subStdv === "number" &&
      typeof subMean === "number"
    ) {
      dispatch({
        type: "ADD",
        data: {
          name,
          mean: subMean,
          stdv: subStdv,
        },
      })
    } else {
      console.log("invalid submission")
    }
  }

  const deleteLine = (id: string) => () => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <div>
      <input value={name} onChange={updateName} placeholder="name" />
      <input value={mean} onChange={updateMean} placeholder="mean" />
      <input value={stdv} onChange={updateStdv} placeholder="stdv" />
      <button onClick={addLine}>Add</button>
      {lines.map(({ id, name, mean, stdv }) => (
        <div key={id}>
          <span>
            {name}, {mean}, {stdv}
          </span>
          <button onClick={deleteLine(id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default InputBlock
