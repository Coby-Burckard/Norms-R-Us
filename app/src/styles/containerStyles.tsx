import styled from "styled-components"

const AppContainer = styled.div`
  width: 100wv;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChartCont = styled.div`
  margin: 20px 0px 40px 0px;
  width: 750px;
  height: 300px;
  > * {
    transform: translate(-24px, 0px);
  }
`
export { AppContainer, ChartCont }
