import request from 'superagent'
import { LostAnimal } from '../../common/lostAnimal'

const lostUrl = '/api/v1/lost'

export function getAllLost(): Promise<LostAnimal[]> {
  return request.get(lostUrl).then((res) => res.body)
}

export function addLost(newLost: LostAnimal): Promise<LostAnimal> {
  return request
    .post(lostUrl)
    .send(newLost)
    .then((res) => {
      return res.body
    })
}

export function deleteLost(lostId: number): Promise<number> {
  return request.del(`${lostUrl}/${lostId}`).then((res) => res.body)
}
