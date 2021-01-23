import React from "react"
import ChartContainer from "./components/ChartContainer"
import Header from "./components/Header"
import { AppContainer } from "./styles/containerStyles"

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <ChartContainer />
    </AppContainer>
  )
}

export default App
