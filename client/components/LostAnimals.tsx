import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setAllLost } from '../actions/lostAnimals'

import SingleLostAnimal from './LostSingleAnimal'

interface Props {
  defaultTo: string
}

export default function AllLostAnimals(petType: Props) {
  const dispatch = useAppDispatch()
  const lostanimals = useAppSelector((state) => state.lostReducer)

  const [selected, setSelected] = useState(petType.defaultTo)

  const options = [
    { label: 'All animals', value: 'all' },
    { label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
  ]

  const filteredAnimals = lostanimals.filter(
    (animal) => animal.species === selected
  )

  useEffect(() => {
    dispatch(setAllLost())
  }, [])

  return (
    <>
      <section>
        <div className="dropDown">
          <label htmlFor="form">Select a sort option: </label>
          <select
            id="form"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="card-header">
          <p className="card-header-title">Help me, Im lost</p>
        </div>

        <div className="card-list-container">
          {filteredAnimals.map((data) => (
            <SingleLostAnimal lostProp={data} key={data.id} />
          ))}
        </div>
        <div>
          {selected === 'all' && (
            <div className="card-list-container">
              {lostanimals.map((data) => (
                <SingleLostAnimal lostProp={data} key={data.id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
