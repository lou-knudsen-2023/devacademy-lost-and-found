import { LostAnimal } from '../../common/LostAnimal'
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
        <div className="card-header">
          <p className="card-header-title">{name}</p>
        </div>

        <div id="species-content">
          <p className="title is-4">Species: </p>
          <p>{species}</p>
        </div>

        <br></br>

        <div id="user-name-content">
          <p className="title is-4">Owner: </p>
          <p>{user_name}</p>
        </div>

        <br></br>

        <div id="contact-details-content">
          <p className="title is-4">If you find our loved pet contact us: </p>
          <p>{user_contact}</p>
        </div>
        {/* if we want to include when the card was posted */}
        {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
      </div>
      <div>
        <button className="button is-dark">Found</button>
      </div>
      {/* Could be using delete button when someone click found, therefore it will be excluded from the list */}
    </div>
  )
}
