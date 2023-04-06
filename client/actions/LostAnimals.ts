import { ThunkAction } from '../store'
import { LostAnimal } from '../../common/LostAnimal'
import {
  addLost,
  getAllLost,
  deleteLost,
  updateLost,
} from '../apis/lostanimals'

export type LostAction =
  | { type: 'ADD_LOST'; payload: LostAnimal }
  | { type: 'SET_LOST'; payload: LostAnimal[] }
  | { type: 'DELETE_LOST'; payload: number }
  | { type: 'UPDATE_LOST'; payload: LostAnimal }
  | { type: 'SHOW_ERROR'; payload: string }

export function receiveLost(lost: LostAnimal[]): LostAction {
  return {
    type: 'SET_LOST',
    payload: lost,
  }
}

export function requestLost(new_lost: LostAnimal): LostAction {
  return {
    type: 'ADD_LOST',
    payload: new_lost,
  }
}

export function delLost(lost_id: number): LostAction {
  return {
    type: 'DELETE_LOST',
    payload: lost_id,
  }
}

export function showError(errorMessage: string): LostAction {
  return {
    type: 'SHOW_ERROR',
    payload: errorMessage,
  }
}

export function updateLostItem(updated_lost: LostAnimal): LostAction {
  return {
    type: 'UPDATE_LOST',
    payload: updated_lost,
  }
}

//Fetching to dataBase

export function fetchAllLost(): ThunkAction {
  return (dispatch) => {
    return getAllLost()
      .then((lost) => {
        dispatch(receiveLost(lost))
      })
      .catch((err) => {
        dispatch(showError(err))
      })
  }
}

export function fetchAddLost(new_lost: LostAnimal): ThunkAction {
  return (dispatch) => {
    return addLost(new_lost)
      .then((lost) => {
        dispatch(requestLost(lost))
      })
      .catch((err) => {
        dispatch(showError(err))
      })
  }
}

export function fetchDeleteLost(lost_id: number): ThunkAction {
  return (dispatch) => {
    return deleteLost(lost_id)
      .then((id) => {
        dispatch(delLost(id))
      })
      .catch((err) => {
        dispatch(showError(err))
      })
  }
}

export function fetchUpdateLost(
  id: number,
  update_lost: LostAnimal
): ThunkAction {
  return (dispatch) => {
    return updateLost(id, update_lost)
      .then((data) => {
        dispatch(updateLostItem(data))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
