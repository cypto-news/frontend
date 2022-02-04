import React from "react"
import { GridItem, Box, Image, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

function Card({ props }) {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  })
  const theme = extendTheme({ breakpoints })
  return (
    <GridItem className="card" width={{ base: "100%", sm: "50%", md: "25%" }}>
      <Image src={props.urlImg} w={350} h={200} />
      <Box className="card-img">
        <a className="lol">NEWS</a>
        <span style={{ fontSize: 10, marginBottom: 10 }}> {props.date}</span>

        <h5 className="lol-1">{props.title}</h5>
      </Box>
    </GridItem>
  )
}

export default Card
