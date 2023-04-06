import { FoundAnimal } from '../../common/FoundAnimal'
import { fetchDeleteFound } from '../actions/FoundAnimals'
import { useAppDispatch } from '../hooks'

interface Props {
  foundProp: FoundAnimal
}

export default function SingleFoundAnimal(props: Props) {
  const { id, species, photo, user_name, user_contact } = props.foundProp
  const dispatch = useAppDispatch()

  return (
    <div className="lost-container">
      <img className="img_size" src={photo} alt={species} />
      <div className="text-body">
        <div className="card-text-bottom">
          <h2>Species:</h2>
          <p>{species}</p>
          <br></br>
          <h2>Owner:</h2>
          <p>{user_name}</p>
          <br></br>
          <h2>If you find our loved pet contact us :</h2>
          <p>{user_contact}</p>
        </div>
        <button onClick={() => dispatch(fetchDeleteFound(id))}>Delete</button>
      </div>
    </div>
  )
}
