import request from 'superagent'
import { LostAnimal, LostAnimalData } from '../../common/lostAnimal'

const lostUrl = '/api/v1/lost'

export function getAllLost(): Promise<LostAnimal[]> {
  return request.get(lostUrl).then((res) => res.body)
}

export function addLost(
  newLost: LostAnimalData,
  token: string
): Promise<LostAnimal> {
  return request
    .post(lostUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(newLost)
    .then((res) => {
      return res.body
    })
}

export function deleteLost(lostId: number): Promise<number> {
  return request.del(`${lostUrl}/${lostId}`).then((res) => res.body)
}
