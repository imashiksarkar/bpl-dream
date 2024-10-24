import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <header>
        <Navbar coins={10_000} />
      </header>

      <main>
        <Hero />
      </main>

      <footer>Footer</footer>
    </>
  )
}

export default App
