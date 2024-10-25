import Button from '../ui/Button'

interface IProp {
  handleClaimCredit: (coinAmount: number) => void
}

const Hero = ({ handleClaimCredit }: IProp) => {
  return (
    <div className='con'>
      <section className='hero bg-neutral-900 flex flex-col items-center justify-center p-8 md:p-16 rounded-2xl bg-shadow bg-cover bg-no-repeat bg-center'>
        <img className='h-52' src='/banner-main.png' alt='banner' />
        <h1 className='text-white text-2xl md:text-4xl text-center font-bold mt-6'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className='text-gray-400 text-center text-xl md:text-2xl font-medium mt-4'>
          Beyond Boundaries Beyond Limits
        </p>

        <Button onClick={() => handleClaimCredit(5000)} />
      </section>
    </div>
  )
}

export default Hero
