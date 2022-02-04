import React from "react"
import Header from "./component/Header"
import contentData from "./data/content"
import Content from "./component/Content"
import "./index.css"

function App() {
  return (
    <>
      <Header data={contentData} />
      <Content />
    </>
  )
}

export default App
