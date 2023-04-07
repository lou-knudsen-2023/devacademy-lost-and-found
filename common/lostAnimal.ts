export interface LostAnimalData {
  name: string
  species: string
  photo: string
  user_id: number
  user_name: string
  user_contact: string
}

export interface LostAnimal extends LostAnimalData {
  id: number
}
