import React, { Dispatch, useState } from "react"
import { LinesAction } from "../reducers/lineList"
import { lineList } from "../types/common"

type Props = {
  dispatch: Dispatch<LinesAction>
  lines: lineList
}

const LineInputs = ({ dispatch, lines }: Props) => {
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

  const lineInputs = [
    { value: name, onChange: updateName, placeholder: "name" },
    { value: mean, onChange: updateMean, placeHolder: "mean" },
    { value: stdv, onChange: updateStdv, placeholder: "stdv" },
  ]

  return (
    <div>
      {lineInputs.map((inputProps) => (
        <input {...inputProps} />
      ))}
      <button onClick={addLine}>Add</button>
    </div>
  )
}

export default LineInputs
