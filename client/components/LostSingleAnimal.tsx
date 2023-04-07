import { LostAnimal } from '../../common/lostAnimal'
interface Props {
  lostProp: LostAnimal
}

export default function SingleLostAnimal(props: Props) {
  const { name, species, photo, user_name, user_contact } = props.lostProp

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={species} />
        </figure>
      </div>

      <div className="card-content">
        {/* <div className="card-header"> */}
        <p className="title is-3">{name}</p>
      </div>

      <div className="card-content" id="species-content">
        <p className="title is-4">
          Species:{' '}
          <span className="title is-5 has-text-weight-normal">{species}</span>
        </p>
      </div>

      <div className="card-content" id="user-name-content">
        <p className="title is-4">
          Owner:{' '}
          <span className="title is-5 has-text-weight-normal">{user_name}</span>
        </p>
      </div>
      <div id="contact-details-content" className="card-content">
        <p className="title is-4">If you find our loved pet contact us: </p>
        <p>{user_contact}</p>
      </div>

      <div>
        <button className="button is-dark">Found</button>
      </div>
    </div>
  )
}
