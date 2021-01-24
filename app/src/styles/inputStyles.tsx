import styled from "styled-components"

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  > * {
    margin: 0 10px;
  }
`

const InputLabel = styled.div`
  color: black;
`

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 5px;
  color: black;
  font-size: 20px;
  width: 75px;
  padding: 3px 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.backgroundGrey};
  color: black;
  font-size: 20px;
  width: 60px;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export { Input, InputContainer, InputLabel, Button }
