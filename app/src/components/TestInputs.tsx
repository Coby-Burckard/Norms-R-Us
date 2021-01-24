import React, { useState, Dispatch } from "react"
import { twoSidedZTest, leftZTest, rightZTest } from "../helpers/zTests"
import { lineList } from "../types/common"
import { LinesAction } from "../reducers/lineList"
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

const TestInputs = ({ lines, dispatch }: Props) => {
  const [left, setLeft] = useState("")
  const [right, setRight] = useState("")

  const updateLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeft(event.target.value)
  }

  const updateRight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRight(event.target.value)
  }

  const runZTest = () => {
    const numRight = parseInt(right)
    const numLeft = parseInt(left)
    let zFunc: (
      mean: number,
      stdv: number,
      left: number,
      right: number
    ) => number

    if (isNaN(numLeft) && isNaN(numRight)) return

    if (!isNaN(numLeft) && !isNaN(numRight)) {
      zFunc = twoSidedZTest
    } else if (!isNaN(numRight)) {
      zFunc = rightZTest
    } else {
      zFunc = leftZTest
    }

    const pvalues: { [key: string]: string } = {}

    lines.forEach((line) => {
      pvalues[line.id] = zFunc(line.mean, line.stdv, numLeft, numRight).toFixed(
        2
      )
    })

    dispatch({
      type: "UPDATE_PVALUES",
      pvalues,
    })
  }

  const lineInputs = [
    { value: left, onChange: updateLeft, placeholder: "<" },
    { value: right, onChange: updateRight, placeholder: ">" },
  ]

  return (
    <InputContainer>
      <InputLabel>Z test</InputLabel>
      {lineInputs.map((inputProps) => (
        <Input key={inputProps.placeholder} {...inputProps} />
      ))}
      <Button onClick={runZTest}>Calc</Button>
    </InputContainer>
  )
}

export default TestInputs
