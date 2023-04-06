export interface FoundAnimalData {
  species?: string
  photo?: string
  user_id?: string
  user_name?: string
  user_contact?: string
}

export interface FoundAnimal extends FoundAnimalData {
  id?: number
}
