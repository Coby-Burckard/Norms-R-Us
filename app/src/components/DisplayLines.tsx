import React, { Dispatch } from "react"
import { lineList } from "../types/common"
import { LinesAction } from "../reducers/lineList"
import {
  ColorIndicator,
  GridContainer,
  GridNode,
  GridNodeName,
  GridButton,
} from "../styles/containerStyles"

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
    <GridContainer>
      {["", "µ", "σ", "p", ""].map((value) => (
        <GridNode underline={true}>{value}</GridNode>
      ))}
      {lines.map(({ id, name, mean, stdv, pValue, color }) => (
        <>
          <GridNodeName>
            <ColorIndicator color={color}></ColorIndicator>
            {name}
          </GridNodeName>

          {[mean, stdv, pValue].map((value) => (
            <GridNode>{value}</GridNode>
          ))}
          <GridNode>
            <GridButton onClick={deleteLine(id)}>X</GridButton>
          </GridNode>
        </>
      ))}
    </GridContainer>
  )
}

export default DisplayLines
