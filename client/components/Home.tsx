import AllFoundAnimals from './FoundAnimals'
import AllLostAnimals from './LostAnimals'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="header-block">
        <p>We help reunite lost pets with their owners.</p>
      </div>
      <div className="list-container">
        <div className="list-lost-dogs">
          <Link to="lost">See all lost dogs</Link>
        </div>
        <div className="list-found-dogs">
          <Link to="found">See all found dogs</Link>
        </div>
        <div className="list-lost-cats">
          <Link to="lost">See all lost cats</Link>
        </div>
        <div className="list-found-cats">
          <Link to="found">See all found cats</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
