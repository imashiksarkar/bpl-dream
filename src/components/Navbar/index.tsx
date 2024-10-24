interface IProp {
  coins?: number
}

const Navbar = ({ coins = 0 }: IProp) => {
  return (
    <nav>
      <div className='con flex flex-col lg:flex-row gap-10 items-center justify-between py-12'>
        <a className='logo' href='/'>
          <img className='w-20' src='/logo.png' alt='logo' />
        </a>

        <ul className='flex flex-col md:flex-row items-center gap-8 md:gap-12 text-slate-600'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Fixture</a>
          </li>
          <li>
            <a href='#'>Teams</a>
          </li>
          <li>
            <a href='#'>Schedules</a>
          </li>
          <li>
            <a
              className='flex items-center gap-4 text-neutral-900 font-semibold py-4 px-5
              border rounded-xl
              '
              href='#'
            >
              <span>{coins} Coins</span>
              <img
                className='h-5 aspect-square'
                src='/coin.png'
                alt='coin-icon'
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
