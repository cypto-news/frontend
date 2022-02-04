import React from "react"
import "./index.css"
import App from "./App"
import Market from "./component/Market"
//
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/market" element={<Market />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
