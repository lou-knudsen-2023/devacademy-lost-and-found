import { FoundAction } from '../actions/FoundAnimals'

export default function errorState(state = '', action: FoundAction): string {
  const { type } = action

  switch (type) {
    case 'SHOW_ERROR':
      return action.payload
    default:
      return state
  }
}
