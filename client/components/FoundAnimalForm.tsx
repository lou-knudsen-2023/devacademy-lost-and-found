import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
//action
import { FoundAnimal } from '../../common/FoundAnimal'

export default function AddFoundForm() {
  const dispatch = useAppDispatch()

  const [foundAnimal, setFoundAnimal] = useState({} as FoundAnimal)
}
