import styled from "styled-components"

const AppContainer = styled.div`
  width: 100wv;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 350px;
    margin: 0 auto;
  }
`

const ChartCont = styled.div`
  margin: 50px 0px 20px 0px;
  width: 750px;
  height: 300px;
  > * {
    transform: translate(-24px, 0px);
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 150px;
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

  @media (max-width: 768px) {
    width: 300px;
    padding: 10px 5px;
  }
`

const GridNode = styled("div")<{ underline?: boolean }>`
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: 10px 0;
  border-bottom: ${(props) =>
    props.underline ? `1px solid ${props.theme.colors.darkGrey}` : "none"};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`

GridNode.defaultProps = {
  underline: false,
}

const GridNodeName = styled(GridNode)`
  width: 175px;

  @media (max-width: 768px) {
    width: 100px;
  }
`

const ColorIndicator = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 7px;
  height: 20px;
  margin-right: 10px;
  width: 20px;

  @media (max-width: 768px) {
    border-radius: 3px;
    height: 10px;
    width: 10px;
  }
`
const GridButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: 0px;
  width: 50px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.small};
    width: 10px;
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
