import styled from "styled-components"

const AppContainer = styled.div`
  width: 100wv;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChartCont = styled.div`
  margin: 50px 0px 20px 0px;
  width: 750px;
  height: 300px;
  > * {
    transform: translate(-24px, 0px);
  }
`

const GridContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 7px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 30px auto;
  padding: 10px 20px;
  width: 500px;
  background-color: ${(props) => props.theme.colors.backgroundGrey};
`

const GridNode = styled("div")<{ underline?: boolean }>`
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  font-size: 20px;
  padding: 10px 0;
  border-bottom: ${(props) =>
    props.underline ? `1px solid ${props.theme.colors.darkGrey}` : "none"};
`

GridNode.defaultProps = {
  underline: false,
}

const GridNodeName = styled(GridNode)`
  width: 175px;
`

const ColorIndicator = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 7px;
  height: 20px;
  margin-right: 10px;
  width: 20px;
`
const GridButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0px;
  width: 50px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
`

export {
  AppContainer,
  ChartCont,
  ColorIndicator,
  GridNode,
  GridNodeName,
  GridContainer,
  GridButton,
}
