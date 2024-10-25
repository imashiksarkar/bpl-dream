import { formatUSD } from '../../utils/formatCurrency'
import Button from './Button'

export interface IProp {
  player: {
    id: string
    name: string
    age: number
    type: string
    nationality: string
    rating: number
    batingHand: string
    price: number
    img: string
  }
  onChoosePlayer: (
    player: Pick<
      IProp['player'],
      'id' | 'name' | 'price' | 'batingHand' | 'img'
    >
  ) => void
}

const PlayerBox = ({ player, onChoosePlayer }: IProp) => {
  return (
    <div className='card border p-4 rounded-xl' key={player.id}>
      <figure className='player-image w-full aspect-[6/4] rounded-lg overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={player.img}
          alt={player.name}
        />
      </figure>

      <div className='flex items-center gap-4 text-xl font-semibold mt-6'>
        <img
          className='h-7 aspect-square'
          src='/user-icon.png'
          alt='user-icon'
        />
        <h1>{player.name}</h1>
      </div>

      <div className='flex items-center justify-between py-4 border-b  mt-2'>
        <div className='flex items-center gap-4'>
          <img className='w-5 ' src='/flag-icon.png' alt='flag-icon' />
          <p className='text-gray-900'>{player.nationality}</p>
        </div>
        <h4 className='tag bg-gray-200 py-2 px-4 rounded-lg text-sm'>
          {player.type}
        </h4>
      </div>

      <div className='mt-5 flex flex-col gap-4 font-semibold'>
        <h1 className='font-bold'>Rating</h1>
        <div className='flex items-center justify-between'>
          <p>Bating Hand:</p>
          <p className='text-gray-500 font-normal'>{player.batingHand}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Price: ${formatUSD.format(player.price)}</p>
          <Button
            className='border py-2 font-normal text-gray-500'
            rounded
            onClick={() =>
              onChoosePlayer({
                id: player.id,
                name: player.name,
                batingHand: player.batingHand,
                img: player.img,
                price: player.price,
              })
            }
          >
            Choose Player
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlayerBox
