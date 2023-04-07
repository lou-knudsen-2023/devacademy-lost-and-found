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
        <div className="is-flex is-justify-content-space-between is-align-items-center">

        <div>
            <h2 className="title is-2 p-3">I&apos;m found! Do I belong to you?</h2>
          </div>

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
        </div>

        <div className="card-list-container is-flex">
          {filteredAnimals.map((data) => (
            <SingleFoundAnimal foundProp={data} key={data.id} />
          ))}
        </div>
        {selected === 'all' && (
          <div className="card-list-container is-flex">
            {foundanimals.map((data) => (
              <SingleFoundAnimal foundProp={data} key={data.id} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
