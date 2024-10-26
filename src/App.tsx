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
        <div className='con mt-12 flex flex-col items-center'>
          <figure className='logo'>
            <img className='h-36' src='/logo-footer.png' alt='logo' />
          </figure>
          <div className='footer__details mt-16 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_auto] gap-6'>
            <div className='details-1 about'>
              <h1 className='text-lg font-semibold'>About Us</h1>
              <p className='text-gray-400 leading-7 mt-4'>
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className='details-2 md:place-self-end lg:place-self-center'>
              <h1 className='text-lg font-semibold'>Quick Links</h1>
              <nav className='text-gray-400 leading-7 mt-4'>
                <ul className='list-disc ms-6'>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Services</a>
                  </li>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='details-3 md:col-span-2 lg:col-span-1'>
              <h1 className='text-lg font-semibold'>Subscribe</h1>
              <p className='text-gray-400 leading-7 mt-2'>
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className='flex flex-col md:flex-row gap-2 md:gap-0 md:rounded-xl overflow-hidden mt-4'>
                <input
                  className='p-5 rounded-xl md:rounded-none basis-4/5 text-black outline-none'
                  name='email'
                  type='email'
                  placeholder='Enter your email'
                />
                <Button
                  className='basis-1/5 p-2 rounded-xl md:rounded-none'
                  type='submit'
                  variant='gradient'
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <hr className='border-gray-500 w-full mt-16' />
        <div className='con'>
          <p className='text-gray-500 py-8 text-center'>
            &copy;{new Date().getFullYear()} softyMart All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
