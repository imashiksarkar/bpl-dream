import Hero from './components/Hero'
import Navbar from './components/Navbar'
import useCoinState from './hooks/useCoinState'

const App = () => {
  const { coin, addCoin, subtractCoin } = useCoinState(5_000)

  return (
    <>
      <header>
        <Navbar coins={coin} />
      </header>

      <main>
        <Hero handleClaimCredit={addCoin} />
        {/* <Hero handleClaimCredit={subtractCoin} /> */}
      </main>

      <footer>Footer</footer>
    </>
  )
}

export default App
