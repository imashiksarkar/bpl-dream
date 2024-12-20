import { MouseEvent } from 'react'
import { IPlayer } from '../../services/playerApi'
import Button from '../ui/Button'

export type SelectedPlayers = Pick<
  IPlayer,
  'id' | 'name' | 'price' | 'batingHand' | 'img'
>

interface ISelectedProps {
  selectedPlayers: SelectedPlayers[]
  onDeleteSelected: (args: { playerId: string; price: number }) => void
  onAddMoreClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const SelectedPlayerList = ({
  selectedPlayers,
  onDeleteSelected,
  onAddMoreClick,
}: ISelectedProps) => {
  return (
    <div className='flex flex-col gap-4 mt-6'>
      {selectedPlayers?.map((player) => (
        <div className='border p-4 rounded-lg flex items-center justify-between'>
          <div className='left flex items-center gap-4'>
            <img
              className='w-20 aspect-square object-cover rounded-lg'
              src={player.img}
              alt={player.name}
            />
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-semibold'>{player.name}</h1>
              <p className='text-gray-500'>{player.batingHand}-Hand-Bat</p>
            </div>
          </div>
          <Button
            className='right'
            rounded
            onClick={() =>
              onDeleteSelected({ playerId: player.id, price: player.price })
            }
          >
            <img className='w-5' src='/trash-icon.png' alt='trash-icon' />
          </Button>
        </div>
      ))}

      {selectedPlayers.length > 0 && (
        <Button
          className='w-max mt-6'
          variant='secondary'
          rounded
          onClick={onAddMoreClick}
          name='Available'
        >
          Add more players
        </Button>
      )}

      {!selectedPlayers.length && (
        <div className='w-full h-9 flex items-center justify-center text-red-500'>
          <h1>No players selected! ⚠</h1>
        </div>
      )}
    </div>
  )
}

export default SelectedPlayerList
