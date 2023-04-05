import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { LostAnimal } from '../../common/LostAnimal'
import { useNavigate } from 'react-router-dom'

function AddLostAnimalForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [lostAnimal, setLostAnimal] = useState({} as LostAnimal)

  const handleLostAnimalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLostAnimal({ ...lostAnimal, [event.target.id]: event.target.value })
  }

  const handleLostAnimalSubmit = (evt: FormEvent) => {
    evt.preventDefault()
  }
}
