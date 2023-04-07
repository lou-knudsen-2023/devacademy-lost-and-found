import { ThunkAction } from '../store'
import { LostAnimal, LostAnimalData } from '../../common/lostAnimal'
import { addLost, getAllLost } from '../apis/lostanimals'

export type LostAction =
  | { type: 'ADD_LOST'; payload: LostAnimal }
  | { type: 'SET_LOST'; payload: LostAnimal[] }
  | { type: 'DELETE_LOST'; payload: number }
  | { type: 'SET_ERROR_STATUS'; payload: string }

export function receiveLost(lost: LostAnimal[]): LostAction {
  return {
    type: 'SET_LOST',
    payload: lost,
  }
}

export function addingLost(newLost: LostAnimal): LostAction {
  return {
    type: 'ADD_LOST',
    payload: newLost,
  }
}

export function delLost(lostId: number): LostAction {
  return {
    type: 'DELETE_LOST',
    payload: lostId,
  }
}

export function setErrorStatus(errorMessage: string): LostAction {
  return {
    type: 'SET_ERROR_STATUS',
    payload: errorMessage,
  }
}

export function setAllLost(): ThunkAction {
  return (dispatch) => {
    return getAllLost()
      .then((lost) => {
        dispatch(receiveLost(lost))
      })
      .catch((err) => {
        dispatch(setErrorStatus(err.message))
      })
  }
}

export function setAddLost(
  newLost: LostAnimalData,
  token: string
): ThunkAction {
  return (dispatch) => {
    return addLost(newLost, token)
      .then((lost) => {
        dispatch(addingLost(lost))
      })
      .catch((err) => {
        dispatch(setErrorStatus(err.message))
      })
  }
}