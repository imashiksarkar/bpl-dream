import { MouseEvent, useEffect, useState } from 'react'
import { fetchPlayers, type IPlayer } from '../../services/playerApi'
import ButtonGroup from '../ui/ButtonGroup'
import AvailablePlayerList from './AvailablePlayersList'
import SelectedPlayerList, { type SelectedPlayers } from './SelectedPlayersList'

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
      if (selectedPlayers.find((sp) => sp.id === player.id)) return
      if (selectedPlayers.length >= 6) return

      subtractCoin(player.price)
      setSelectedPlayers((prev) => [...prev, player])
    } catch (error) {
      console.log(error)
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
        <header className='flex items-center justify-between'>
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
          />
        )}
      </section>
    </div>
  )
}

export default Players
