import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setAllFound } from '../actions/foundAnimals'
import SingleFoundAnimal from './FoundSingleAnimal'
interface Props {
  defaultTo: string
}

export default function AllFoundAnimals(petType: Props) {
  const dispatch = useAppDispatch()
  const foundanimals = useAppSelector((state) => state.foundReducer)
  const [selected, setSelected] = useState(petType.defaultTo)

  const options = [
    { label: 'All animals', value: 'all' },
    { label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
  ]

  const filteredAnimals = foundanimals.filter(
    (animal) => animal.species === selected
  )

  useEffect(() => {
    dispatch(setAllFound())
  }, [dispatch])

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
          <p className="card-header-title">Good news, Im found</p>
        </div>

        <div className="card-list-container">
          {filteredAnimals.map((data) => (
            <SingleFoundAnimal foundProp={data} key={data.id} />
          ))}
        </div>
        {selected === 'all' && (
          <div className="card-list-container">
            {foundanimals.map((data) => (
              <SingleFoundAnimal foundProp={data} key={data.id} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
