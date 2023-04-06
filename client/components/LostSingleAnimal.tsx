import { LostAnimal } from '../../common/LostAnimal'
// need delete action
import { useAppDispatch } from '../hooks'

interface Props {
  lostProp: LostAnimal
}

export default function SingleLostAnimal(props: Props) {
  const { id, name, species, photo, user_name, user_contact } = props.lostProp
  const dispatch = useAppDispatch()

  return (
    <div className="lost-container">
      <img className="img_size" src={photo} alt={species} />
      <div className="text-body">
        <div className="title-card">
          <h1>{name}</h1>
        </div>
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
      </div>
      <button>Found</button>
      {/* Could be using delete button when someone click found, therefore it will be excluded from the list */}
    </div>
  )
}
