import request from 'superagent'
import { FoundAnimal } from '../../common/FoundAnimal'

export function getAllFound(): Promise<FoundAnimal[]> {
  return request.get('/api/v1/found').then((res) => res.body)
}

export function addFound(newFound: FoundAnimal): Promise<FoundAnimal> {
  return request
    .post('')
    .send(newFound)
    .then((res) => res.body)
}

export function deleteFound(foundId: number): Promise<number> {
  return request.del(`/${foundId}`).then((res) => res.body)
}

//Do We need update ?
