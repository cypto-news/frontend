import React from "react"
import Header from "./Header"
import { Center } from "@chakra-ui/react"
import { Box, Wrap, Spacer } from "@chakra-ui/react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import axios from "axios"
import { useState, useEffect } from "react"
import contentData from "../data/content"
import { Container } from "@chakra-ui/react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

let showCoin = ""
function Market() {
  let [trends, setTrends] = useState([])
  async function getPosts() {
    try {
      let { data } = await axios.get(
        `https://restsite256.herokuapp.com/market/trend_market`
      )
      setTrends(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  //==> CHART

  let [coins, setCoins] = useState([])
  async function getCoins() {
    try {
      let { data } = await axios.get(
        `https://restsite256.herokuapp.com/market/view_market?coin=${
          showCoin !== "" ? showCoin : "btc"
        }`
      )
      setCoins(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCoins()
  }, [])

  function showChart(x) {
    showCoin = x.coin
    getCoins()
  }

  let lineData = {
    labels: coins.map((coin) => coin.date),
    datasets: [
      {
        label: `${showCoin.length !== 0 ? coins[0].coin : "BTC"}`,
        data: coins.map((coin) => coin.price),
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  }

  //==>
  const sortTrendsMarket = trends.sort((a, b) => b.price - a.price)

  return (
    <>
      <Header data={contentData} />
      <Container>
        <Wrap spacing="30px">
          <Box className="market-chart" width={800}>
            <Line aria-label="none" data={lineData} />
          </Box>
          <Box className="market-trends">
            {sortTrendsMarket.map((item, i) => (
              <Box
                key={i}
                onClick={() => showChart(item)}
                className="button-trend"
                as="button"
              >
                <Center>
                  <img
                    width={15}
                    height={15}
                    style={{ paddingRight: 10 }}
                    src={item.logo_coin}
                  />
                </Center>
                <Center> {item.coin}</Center>
                <Spacer />
                <Center> ${item.price}</Center>
              </Box>
            ))}
          </Box>
        </Wrap>
      </Container>
    </>
  )
}

export default Market
