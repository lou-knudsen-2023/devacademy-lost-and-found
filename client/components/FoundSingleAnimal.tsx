import { FoundAnimal } from '../../common/foundAnimal'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  foundProp: FoundAnimal
}

export default function SingleFoundAnimal(props: Props) {
  const { species, photo, user_name, user_contact } = props.foundProp
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="lost-container">
      <img className="img_size" src={photo} alt={species} />
      <div className="text-body">
        <div className="card-text-bottom">
          <h2>Species:</h2>
          <p>{species}</p>
          <h2>Owner:</h2>
          <p>{user_name}</p>
          <h2>If you find our loved pet contact us :</h2>
          <IfAuthenticated>
            <p>{user_contact}</p>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button
              className="button is-primary"
              onClick={() => loginWithRedirect()}
            >
              Please log in to view details
            </button>
          </IfNotAuthenticated>
        </div>
      </div>
    </div>
  )
}
