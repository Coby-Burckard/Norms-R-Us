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

function linesReducer(state: lineList, action: LinesAction): lineList {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          ...action.data,
          id: v4(),
        },
      ]
    case "DELETE":
      return state.filter((line) => line.id !== action.id)
  }
}

export default linesReducer
export type { LinesAction }
