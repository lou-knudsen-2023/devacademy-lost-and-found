import { ChangeEvent, FormEvent, useState } from 'react'
import { LostAnimal, LostAnimalData } from '../../common/lostAnimal'
import { useAppDispatch } from '../hooks'
import { setAddLost } from '../actions/lostAnimals'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function AddLostForm() {
  const [lostAnimal, setLostAnimal] = useState({
    name: '',
    species: '',
    photo: '',
    user_name: '',
    user_contact: '',
  } as LostAnimalData)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { getAccessTokenSilently } = useAuth0()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLostAnimal({ ...lostAnimal, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      dispatch(setAddLost(lostAnimal, token))
      navigate('/lost')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-found">
      <form onSubmit={handleSubmit}>
        <h1>Lost Animal Form</h1>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          value={lostAnimal?.name}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <label htmlFor="photo">Photo Url</label>
        <input
          name="photo"
          id="photo"
          type="text"
          value={lostAnimal?.photo}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <label htmlFor="species">Species</label>
        <input
          name="species"
          id="species"
          type="species"
          value={lostAnimal?.species}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <label htmlFor="user_name">Contact Person</label>
        <input
          name="user_name"
          id="user_name"
          type="user_name"
          value={lostAnimal?.user_name}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <label htmlFor="user_contact">Contact Details/Email address</label>
        <input
          name="user_contact"
          id="user_contact"
          type="user_contact"
          value={lostAnimal?.user_contact}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
