import { Container, Grid } from "@chakra-ui/react"
import React from "react"
import Card from "./Card"
import Axios from "axios"
import { useState, useEffect } from "react"

function Content() {
  const [posts, setPosts] = useState([])

  async function getPosts() {
    try {
      const { data } = await Axios.get(
        "https://restsite256.herokuapp.com/news/view_news"
      )

      // console.log(response);
      setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} minWidth={300}>
        {posts.map((post, i) => (
          <Card key={i} props={post} />
        ))}
      </Grid>
    </Container>
  )
}

export default Content
