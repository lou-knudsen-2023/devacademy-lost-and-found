import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setAllLost } from '../../client/actions/lostAnimals'

import SingleLostAnimal from './LostSingleAnimal'

interface Props {
  defaultTo: string
}

export default function AllLostAnimals() {
  const dispatch = useAppDispatch()
  const lostanimals = useAppSelector((state) => state.lostReducer)
  const [selected, setSelected] = useState(petType.defaultTo)
  // variable using Appselector to the lost animal reducer

  useEffect(() => {
    dispatch(setAllLost())
  }, [])

  return (
    <>
      <h1>Help me, Im lost</h1>
      <section>
        <div className="card-list-container">
          {lostanimals.map((data) => (
            <SingleLostAnimal lostProp={data} key={data.id} />
          ))}
        </div>
      </section>
    </>
  )
}
