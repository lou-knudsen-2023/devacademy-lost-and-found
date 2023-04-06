import request from 'superagent'
import { LostAnimal } from '../../common/LostAnimal'

export function getLostAnimals(): Promise<LostAnimal[]> {
  return request.get('/api/v1/lost').then((res) => res.body)
}
