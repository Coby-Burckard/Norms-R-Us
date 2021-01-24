import styled from "styled-components"

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  color: black;

  @media (max-width: 768px) {
    font-size: 28px;
    word-wrap: true;
    width: 200px;
  }
`

const ImageLink = styled.img`
  height: 50px;
  width: 50px;
  margin: 8px 0 0 40px;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    margin: 2px 0 0 10px;
  }
`

export { Header, H1, ImageLink }
