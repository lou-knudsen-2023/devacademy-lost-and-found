import { LostAction } from '../actions/lostAnimals'
import { LostAnimal } from '../../common/lostAnimal'

const initialState = [] as LostAnimal[]

export default function lostReducer(
  state = initialState,
  action: LostAction
): LostAnimal[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_LOST':
      return payload
    case 'ADD_LOST':
      return [...state, payload]
    case 'DELETE_LOST':
      return state.filter((data) => data.id !== payload)
    default:
      return state
  }
}
