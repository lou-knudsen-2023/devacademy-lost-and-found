import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAllLost } from '../actions/lostAnimals'

import SingleLostAnimal from './LostSingleAnimal'

export default function AllLostAnimals() {
  const dispatch = useAppDispatch()
  const lostanimals = useAppSelector((state) => state.lostReducer)
  // variable using Appselector to the lost animal reducer

  useEffect(() => {
    dispatch(fetchAllLost())
  }, [])

  return (
    <>
      <div className="card-header">
        <p className="card-header-title">Help me, Im lost</p>
      </div>
      <section>
        <div>
          {lostanimals.map((data) => (
            <SingleLostAnimal lostProp={data} key={data.id} />
          ))}
        </div>
      </section>
    </>
  )
}
