import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'

import { LostAnimal } from '../../common/LostAnimal'

export default function AddLostForm() {
  const dispatch = useAppDispatch()

  const [lostAnimal, setLostAnimal] = useState({} as LostAnimal)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLostAnimal({ ...lostAnimal, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // set the fetch elements from the action

    setLostAnimal({
      name: '',
      species: '',
      photo: '',
      user_name: '',
      user_contact: '',
    } as LostAnimal)
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
          value={lostAnimal.name}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <br></br>
        <label htmlFor="photo">Photo Url</label>
        <input
          name="photo"
          id="photo"
          type="text"
          value={lostAnimal.photo}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <br></br>
        <label htmlFor="species">Species</label>
        <input
          name="species"
          id="species"
          type="species"
          value={lostAnimal.species}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <br></br>
        <label htmlFor="user_name">Contact Person</label>
        <input
          name="user_name"
          id="user_name"
          type="user_name"
          value={lostAnimal.user_name}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <br></br>
        <label htmlFor="user_contact">Contact Details/Email address</label>
        <input
          name="user_contact"
          id="user_contact"
          type="user_contact"
          value={lostAnimal.user_contact}
          onChange={handleChange}
          placeholder="ex:'https://images...."
          required
        />
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
