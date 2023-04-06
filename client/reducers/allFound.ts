import { FoundAction } from '../actions/FoundAnimals'
import { FoundAnimal } from '../../common/FoundAnimal'

const initialState = [] as FoundAnimal[]

export default function foundReducer(
  state = initialState,
  action: FoundAction
): FoundAnimal[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_FOUND':
      return payload
    case 'ADD_FOUND':
      return [...state, payload]
    // case 'UPDATE_COFFEE':
    //   return state.map((data) => (data.id === payload.id ? payload : data))
    case 'DELETE_FOUND':
      return state.filter((data) => data.id !== payload)
    default:
      return state
  }
}
