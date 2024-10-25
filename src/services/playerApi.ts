export interface IPlayer {
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

export const fetchPlayers = async () => {
  const res = await fetch('/db/players.json')
  return (await res.json()) as IPlayer[]
}
