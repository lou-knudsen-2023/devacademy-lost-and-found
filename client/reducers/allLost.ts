import { LostAction } from '../actions/LostAnimals'
import { LostAnimal } from '../../common/LostAnimal'

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
    case 'UPDATE_LOST':
      return state.map((data) => (data.id === payload.id ? payload : data))
    case 'DELETE_LOST':
      return state.filter((data) => data.id !== payload)
    default:
      return state
  }
}
