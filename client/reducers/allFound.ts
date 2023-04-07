import { FoundAction } from '../actions/foundAnimals'
import { FoundAnimal } from '../../common/foundAnimal'

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
    case 'DELETE_FOUND':
      return state.filter((data) => data.id !== payload)
    default:
      return state
  }
}
