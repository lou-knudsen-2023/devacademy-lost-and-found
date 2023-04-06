import request from 'superagent'
import { LostAnimal } from '../../common/LostAnimal'

export function getAllLost(): Promise<LostAnimal[]> {
  return request.get('').then((res) => res.body)
}

export function addLost(newLost: LostAnimal): Promise<LostAnimal> {
  return request
    .post('')
    .send(newLost)
    .then((res) => {
      return res.body
    })
}

export function deleteLost(lostId: number): Promise<number> {
  return request.del(`/${lostId}`).then((res) => res.body)
}

export function updateLost(
  id: number,
  updatedLost: LostAnimal
): Promise<LostAnimal> {
  return request
    .patch(`/${id}`)
    .send(updatedLost)
    .then((res) => {
      return res.body
    })
}
