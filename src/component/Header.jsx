import React from "react"
import { Flex, Center } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Header({ data }) {
  return (
    <div className="Header">
      <Flex paddingBottom={50}>
        {data.map((item, i) => (
          <Center
            key={i}
            px={20}
            h={50}
            fontSize={15}
            borderBottomStyle={"solid"}
            borderBottomColor={item.bgColor}
            _hover={{ color: item.bgColor }}
            cursor={"pointer"}
          >
            <Link className="btn" to={`/${item.content}`}>
              {item.content}
            </Link>
          </Center>
        ))}
      </Flex>
    </div>
  )
}

export default Header
