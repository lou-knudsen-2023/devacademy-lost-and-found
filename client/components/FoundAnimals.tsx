import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setAllFound } from '../actions/foundAnimals'
import SingleFoundAnimal from './FoundSingleAnimal'

export default function AllFoundAnimals() {
  const dispatch = useAppDispatch()
  const founds = useAppSelector((state) => state.foundReducer)
  useEffect(() => {
    dispatch(setAllFound())
  }, [dispatch])
  return (
    <section>
      <div className="card-list-container">
        {founds.map((data) => (
          <SingleFoundAnimal foundProp={data} key={data.id} />
        ))}
      </div>
    </section>
  )
}
