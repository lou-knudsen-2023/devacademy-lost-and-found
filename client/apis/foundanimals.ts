import request from 'superagent'
import { FoundAnimal } from '../../common/foundAnimal'

const foundUrl = '/api/v1/found'

export function getAllFound(): Promise<FoundAnimal[]> {
  return request.get(foundUrl).then((res) => res.body)
}

export function addFound(newFound: FoundAnimal): Promise<FoundAnimal> {
  return request
    .post(foundUrl)
    .send(newFound)
    .then((res) => res.body)
}

export function deleteFound(foundId: number): Promise<FoundAnimal[]> {
  return request.del(`${foundUrl}/${foundId}`).then((res) => res.body)
}
