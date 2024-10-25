import { useState } from 'react'

const useCoinState = (initCoinAmount: number = 0) => {
  const [coin, setCoin] = useState(initCoinAmount)

  const addCoin = (coinAmount: number) => {
    if (coinAmount < 0) throw new Error('Amount must be greater than 0.')

    setCoin((prevCoin) => prevCoin + coinAmount)
  }

  const subtractCoin = (coinAmount: number) => {
    if (coin < coinAmount)
      throw new Error('Amount must be less than available coins.')

    setCoin((prevCoin) => prevCoin - coinAmount)
  }

  return { coin, addCoin, subtractCoin }
}

export default useCoinState
