import { ChangeEvent, FormEvent, useState } from 'react'
import { FoundAnimal, FoundAnimalData } from '../../common/FoundAnimal'
import { useAppDispatch } from '../hooks'
import { setAddFound } from '../actions/foundAnimals'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function AddFoundForm() {
  const [foundAnimal, setFoundAnimal] = useState({
    species: '',
    photo: '',
    user_name: '',
    user_contact: '',
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { getAccessTokenSilently } = useAuth0()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFoundAnimal({ ...foundAnimal, [e.target.id]: e.target.value })
  }

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   dispatch(setAddFound(foundAnimal))
  //   navigate('/found')
  // }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      dispatch(setAddFound(foundAnimal, token))
      navigate('/found')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-found">
      <form onSubmit={handleSubmit}>
        <h1>Found Form</h1>
        <label htmlFor="photo">Photo Url</label>
        <input
          name="photo"
          id="photo"
          type="text"
          value={foundAnimal?.photo}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <label htmlFor="species">Species</label>
        <input
          name="species"
          id="species"
          type="text"
          value={foundAnimal?.species}
          onChange={handleChange}
          placeholder="ex:'https://images....'"
          required
        />
        <label htmlFor="user_name">Name</label>
        <input
          name="user_name"
          id="user_name"
          value={foundAnimal?.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <label htmlFor="user_contact">Contact</label>
        <input
          name="user_contact"
          id="user_contact"
          value={foundAnimal?.user_contact}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
