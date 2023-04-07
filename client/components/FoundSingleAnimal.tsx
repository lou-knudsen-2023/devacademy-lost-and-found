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
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={species} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-3">{species}</p>
      </div>

      <div className="card-content" id="species-content">
        <p className="title is-4">
          Owner:
          <span className="title is-5 has-text-weight-normal">{user_name}</span>
        </p>
      </div>
      <div id="contact-details-content" className="card-content">
        <p className="title is-4">If this is your pet please contact: </p>
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
