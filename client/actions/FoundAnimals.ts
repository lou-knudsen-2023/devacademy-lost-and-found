import { ThunkAction } from '../store'
import { FoundAnimal } from '../../common/FoundAnimal'
import { addFound, getAllFound, deleteFound } from '../apis/foundanimals'

export type FoundAction =
  | { type: 'ADD_FOUND'; payload: FoundAnimal }
  | { type: 'SET_FOUND'; payload: FoundAnimal[] }
  | { type: 'DELETE_FOUND'; payload: number }
  | { type: 'SHOW_ERROR'; payload: string }

export function receiveFound(found: FoundAnimal[]): FoundAction {
  return {
    type: 'SET_FOUND',
    payload: found,
  }
}

export function requestFound(new_found: FoundAnimal): FoundAction {
  return {
    type: 'ADD_FOUND',
    payload: new_found,
  }
}

export function delFound(found_id: number): FoundAction {
  return {
    type: 'DELETE_FOUND',
    payload: found_id,
  }
}

export function showError(errorMessage: string): FoundAction {
  return {
    type: 'SHOW_ERROR',
    payload: errorMessage,
  }
}

//Fetching to dataBase

export function fetchAllFound(): ThunkAction {
  return (dispatch) => {
    return getAllFound()
      .then((found) => {
        dispatch(receiveFound(found))
      })
      .catch((err) => {
        dispatch(showError(err))
      })
  }
}

export function fetchAddFound(new_found: FoundAnimal): ThunkAction {
  return (dispatch) => {
    return addFound(new_found)
      .then((found) => {
        dispatch(requestFound(found))
      })
      .catch((err) => {
        dispatch(showError(err))
      })
  }
}

export function fetchDeleteFound(found_id: number): ThunkAction {
  return (dispatch) => {
    return deleteFound(found_id)
      .then((id) => {
        dispatch(delFound(id))
      })
      .catch((err) => {
        dispatch(showError(err))
      })
  }
}
