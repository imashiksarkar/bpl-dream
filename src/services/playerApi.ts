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
  const res = await fetch(
    'https://res.cloudinary.com/imashiksarkar/raw/upload/v1729952683/ph-hosting/players_data.json'
  )
  return (await res.json()) as IPlayer[]
}
