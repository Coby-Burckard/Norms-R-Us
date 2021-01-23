import React, { Dispatch } from "react"
import { lineList } from "../types/common"
import { LinesAction } from "../reducers/lineList"

type Props = {
  lines: lineList
  dispatch: Dispatch<LinesAction>
}

const DisplayLines = ({ lines, dispatch }: Props) => {
  const deleteLine = (id: string) => () => {
    dispatch({
      type: "DELETE",
      id,
    })
  }
  return (
    <>
      {lines.map(({ id, name, mean, stdv, pValue }) => (
        <div key={id}>
          <span>
            {name}, {mean}, {stdv}, {pValue}
          </span>
          <button onClick={deleteLine(id)}>Remove</button>
        </div>
      ))}
    </>
  )
}

export default DisplayLines
