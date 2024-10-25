import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Players from './components/Players/inedx'
import useCoinState from './hooks/useCoinState'


const App = () => {
  const { coin, addCoin, subtractCoin } = useCoinState(0)



  return (
    <>
      <header>
        <Navbar coins={coin} />
      </header>

      <main>
        <Hero handleClaimCredit={addCoin} />
        <Players addCoin={addCoin} subtractCoin={subtractCoin} />
      </main>

      <footer>Footer</footer>
    </>
  )
}

export default App
