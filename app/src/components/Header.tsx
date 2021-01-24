import React from "react"
import { H1, Header, ImageLink } from "../styles/headerStyles"
import github from "./images/github.png"

const Head = () => (
  <Header>
    <H1>Gaussian Distribution</H1>
    <a href="https://github.com/Coby-Burckard/Norms-R-Us">
      <ImageLink src={github} />
    </a>
  </Header>
)
export default Head
