import styled from "styled-components"

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  > * {
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.small};
    margin: 7px;
    > * {
      margin: 0 3px;
    }
  }
`

const InputLabel = styled.div`
  color: black;
`

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 5px;
  color: black;
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 75px;
  padding: 3px 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }

  @media (max-width: 768px) {
    padding: 1px;
    font-size: ${(props) => props.theme.fontSize.small};
    width: 50px;
  }
`

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.button};
  color: black;
  font-size: ${(props) => props.theme.fontSize.medium};
  min-width: 60px;
  min-height: 29.2px;
  padding: 0px 5px;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`

export { Input, InputContainer, InputLabel, Button }
