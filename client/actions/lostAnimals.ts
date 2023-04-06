import { ThunkAction } from '../store'
import { LostAnimal } from '../../common/LostAnimal'
import { addLost, getAllLost, deleteLost } from '../apis/lostanimals'

export type LostAction =
  | { type: 'ADD_LOST'; payload: LostAnimal }
  | { type: 'SET_LOST'; payload: LostAnimal[] }
  | { type: 'DELETE_LOST'; payload: number }

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

//Fetching to dataBase

export function setAllLost(): ThunkAction {
  return (dispatch) => {
    return getAllLost()
      .then((lost) => {
        dispatch(receiveLost(lost))
      })
      .catch((err) => {
        return console.log(err.message)
      })
  }
}

export function setAddLost(newLost: LostAnimal): ThunkAction {
  return (dispatch) => {
    return addLost(newLost)
      .then((lost) => {
        dispatch(addingLost(lost))
      })
      .catch((err) => {
        return console.log(err.message)
      })
  }
}

export function setDeleteLost(lostId: number): ThunkAction {
  return (dispatch) => {
    return deleteLost(lostId)
      .then((id) => {
        dispatch(delLost(id))
      })
      .catch((err) => {
        return console.log(err.message)
      })
  }
}
