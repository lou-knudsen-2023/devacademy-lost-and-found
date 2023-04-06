import request from 'superagent'
import { LostAnimal } from '../../common/LostAnimal'

export function getLostAnimals(): Promise<LostAnimal[]> {
  return request.get('/api/v1/lost').then((res) => res.body)
}

export function addNewLostAnimal(
  newLostAnimal: LostAnimal
): Promise<LostAnimal> {
  return request
    .post('/api/v1/lost')
    .send(newLostAnimal)
    .then((res) => {
      return res.body
    })
}

//unused potential APIClient CRUD Functions

// export function updateLostAnimalsApi(lostAnimal: LostAnimal) {
//   return request
//     .post(`/api/v1/shows/${lostAnimal.id}`)
//     .send(lostAnimal)
//     .then((res) => {
//       return res.body
//     })
// }

// export function deleteLostAnimalsApi(lostAnimalid: number): Promise<number> {
//   return request.del(`/api/v1/lost/${lostAnimalid}`).then((res) => res.body)
// }
