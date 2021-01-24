import React, { Dispatch, useState } from "react"
import { LinesAction } from "../reducers/lineList"
import { lineList } from "../types/common"
import {
  Button,
  Input,
  InputContainer,
  InputLabel,
} from "../styles/inputStyles"

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
    { value: mean, onChange: updateMean, placeholder: "µ" },
    { value: stdv, onChange: updateStdv, placeholder: "σ" },
  ]

  return (
    <InputContainer>
      <InputLabel>New Line</InputLabel>
      {lineInputs.map((inputProps) => (
        <Input key={inputProps.placeholder} {...inputProps} />
      ))}
      <Button onClick={addLine}>Add</Button>
    </InputContainer>
  )
}

export default LineInputs
