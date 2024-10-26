import { MouseEvent, useEffect, useState } from 'react'
import { fetchPlayers, type IPlayer } from '../../services/playerApi'
import ButtonGroup from '../ui/ButtonGroup'
import AvailablePlayerList from './AvailablePlayersList'
import SelectedPlayerList, { type SelectedPlayers } from './SelectedPlayersList'
import { Bounce, toast } from 'react-toastify'

interface IProp {
  addCoin: (coinAmount: number) => void
  subtractCoin: (coinAmount: number) => void
}

const Players = ({ addCoin, subtractCoin }: IProp) => {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayers[]>([])

  useEffect(() => {
    fetchPlayers().then((players) => setPlayers(players))
  }, [])

  const [selected, setSelected] = useState('Available')
  const handleSelection = (event: MouseEvent<HTMLButtonElement>) =>
    setSelected(event.currentTarget.name)

  const handleChoosePlayer = (player: SelectedPlayers) => {
    try {
      if (selectedPlayers.find((sp) => sp.id === player.id)) {
        return toast.error('Player already selected.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
      }
      if (selectedPlayers.length >= 6) {
        return toast.warn('Maximum players selected.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
      }

      subtractCoin(player.price)
      setSelectedPlayers((prev) => [...prev, player])
      return toast.success(`Player ${player.name} is selected.`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    } catch (error) {
      return toast.error('Not enough coins.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  const handleDeleteSelected = ({
    playerId,
    price,
  }: {
    playerId: string
    price: number
  }) => {
    setSelectedPlayers((prev) =>
      prev.filter((player) => player.id !== playerId)
    )

    addCoin(price)
  }

  return (
    <div className='con mt-12'>
      <section className='players'>
        {/* Header */}
        <header className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          {selected === 'Available' ? (
            <h1 className='text-2xl font-bold'>Available Players</h1>
          ) : (
            <h1 className='text-2xl font-bold'>
              Selected Players ({selectedPlayers.length}/6)
            </h1>
          )}
          <ButtonGroup
            handleSelection={handleSelection}
            selected={selected}
            names={['Available', 'Selected']}
            numSelectedPlayers={selectedPlayers.length}
          />
        </header>
        {/* Players */}
        {selected === 'Available' ? (
          <AvailablePlayerList
            players={players}
            onChoosePlayer={handleChoosePlayer}
          />
        ) : (
          <SelectedPlayerList
            selectedPlayers={selectedPlayers}
            onDeleteSelected={handleDeleteSelected}
            onAddMoreClick={handleSelection}
          />
        )}
      </section>
    </div>
  )
}

export default Players
