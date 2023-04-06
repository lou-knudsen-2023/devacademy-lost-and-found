import request from 'superagent'
import { LostAnimal } from '../../common/LostAnimal'

export function getAllLost(): Promise<LostAnimal[]> {
  return request
    .get('/api/v1/lost')
    .then((res) => {
      res.body
    })
    .catch((err) => err.message)
}

export function addLost(newLost: LostAnimal): Promise<LostAnimal> {
  return request
    .post('')
    .send(newLost)
    .then((res) => {
      return res.body
    })
}

//unused potential APIClient CRUD Functions

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

//delete lost animal function to be used later

// export function deleteLostAnimalsApi(lostAnimalid: number): Promise<number> {
//   return request.del(`/api/v1/lost/${lostAnimalid}`).then((res) => res.body)
// }
