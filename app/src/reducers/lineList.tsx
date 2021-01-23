import { lineList } from "../types/common"
import { v4 } from "uuid"

type LinesAction =
  | {
      type: "ADD"
      data: {
        name: string
        mean: number
        stdv: number
      }
    }
  | {
      type: "DELETE"
      id: string
    }
  | {
      type: "UPDATE_PVALUES"
      pvalues: {
        [key: string]: string
      }
    }

const colors: string[] = ["#3CAEA3", "#20639B", "#F6D55C", "#173F5F", "#ED553B"]

function linesReducer(state: lineList, action: LinesAction): lineList {
  switch (action.type) {
    case "ADD":
      const newState = [
        ...state,
        {
          ...action.data,
          id: v4(),
          zScore: "-",
          pValue: "-",
        },
      ].map((line, index) => {
        return {
          ...line,
          color: colors[index % colors.length],
        }
      })
      return newState
    case "DELETE":
      return state.filter((line) => line.id !== action.id)
    case "UPDATE_PVALUES":
      return state.map((line) => {
        line.pValue = action.pvalues[line.id]
        return line
      })
  }
}

export default linesReducer
export type { LinesAction }
