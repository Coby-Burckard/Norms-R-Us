import { lineList, probData } from "../types/common"

type DataAction = {
  type: string
  data: lineList
}

function dataReducer(state: probData, action: DataAction): probData {
  switch (action.type) {
    case "GENERATE":
      return state
  }
  return state
}

export default dataReducer
export type { DataAction }
