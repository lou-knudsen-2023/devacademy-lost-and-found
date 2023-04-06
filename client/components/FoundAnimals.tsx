import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAllFound } from '../actions/FoundAnimals'
import SingleFoundAnimal from './FoundSingleAnimal'

export default function AllFoundAnimals() {
  const dispatch = useAppDispatch()
  const founds = useAppSelector((state) => state.foundReducer)

  useEffect(() => {
    dispatch(fetchAllFound())
  }, [])

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
