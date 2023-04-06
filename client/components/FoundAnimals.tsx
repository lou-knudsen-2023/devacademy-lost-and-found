import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
//need action to set All the Found Animals
import SingleFoundAnimal from './FoundSingleAnimal'

export default function AllFoundAnimals() {
  const dispatch = useAppDispatch()
  // variable using Appselector to the found animal reducer

  useEffect(() => {
    // dispatching the setFoundAnimal(thunkaction) from action
  }, [])

  return (
    <section>
      <div className="card-list-container">
        {/* Do the mapping from the variable that use AppSelector */}
      </div>
    </section>
  )
}
