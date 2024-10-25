import { MouseEvent, useId } from 'react'
import Button from './Button'

interface IBtnGroupProp {
  names: string[]
  selected: string
  handleSelection: (event: MouseEvent<HTMLButtonElement>) => void
  numSelectedPlayers: number
}

const ButtonGroup = ({
  names,
  selected,
  handleSelection,
  numSelectedPlayers,
}: IBtnGroupProp) => {
  return (
    <div className='btn-group w-max flex rounded-xl overflow-hidden border'>
      {names.map((name) => (
        <Button
          variant={name === selected ? 'secondary' : 'primary'}
          name={name}
          onClick={handleSelection}
          key={useId()}
        >
          {`${name} ${name === 'Selected' ? `(${numSelectedPlayers})` : ''}`}
        </Button>
      ))}
    </div>
  )
}

export default ButtonGroup
