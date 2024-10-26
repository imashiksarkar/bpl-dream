import PlayerBox, { type IProp as IBoxPropType } from '../ui/PlayerBox'

interface IProp {
  players: IBoxPropType['player'][]
  onChoosePlayer: IBoxPropType['onChoosePlayer']
}

const AvailablePlayerList = ({ players, onChoosePlayer }: IProp) => {
  return (
    <div className='players-display grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-4 justify-center mt-6'>
      {players.map((player) => (
        <PlayerBox onChoosePlayer={onChoosePlayer} player={player} key={player.id} />
      ))}
    </div>
  )
}

export default AvailablePlayerList
