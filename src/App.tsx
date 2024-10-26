import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Players from './components/Players/inedx'
import Button from './components/ui/Button'
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

      <footer className='bg-slate-950 mt-24'>
        <div className='relative before:h-1/2 before:bg-white before:absolute before:w-full before:z-10'>
          <div className='con z-20 relative'>
            <div className='newsletter p-6 md:py-20 bg-white bg-shadow bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden border outline outline-2 outline-offset-[15px] outline-gray-200 flex flex-col items-center'>
              <h1 className='text-3xl font-bold text-gray-900'>
                Subscribe to our Newsletter
              </h1>
              <p className='text-gray-600 text-xl font-medium mt-4'>
                Get the latest updates and news right in your inbox!
              </p>
              <form className='flex flex-col md:flex-row w-full gap-4 md:gap-6 md:w-4/5 xl:w-1/2 mt-6'>
                <input
                  className='border py-5 px-8 rounded-xl basis-4/5'
                  name='email'
                  type='email'
                  placeholder='Enter your email'
                />
                <Button
                  className='basis-1/5'
                  type='submit'
                  variant='gradient'
                  rounded
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </footer>
    </>
  )
}

export default App
