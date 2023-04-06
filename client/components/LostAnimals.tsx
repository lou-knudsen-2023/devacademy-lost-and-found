import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
//need action to set All the Lost
//we need to import from actions the fetchsetlostanimal below

import SingleLostAnimal from './LostSingleAnimal'
import AddLostForm from './LostAnimalForm'

export default function AllLostAnimals() {
  const dispatch = useAppDispatch()
  const lostanimals = useAppSelector((state) => {
    state.lostReducer
  })
  // variable using Appselector to the lost animal reducer

  useEffect(() => {
    // dispatching the setLostAnimal(thunkaction) from action
  }, [])

  return (
    <section>
      <div className="card-list-container">
        {/* Do the mapping from the variable that use AppSelector */}
      </div>
    </section>
  )
}
