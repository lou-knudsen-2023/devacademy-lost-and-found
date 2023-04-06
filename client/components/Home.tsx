import AllFoundAnimals from './FoundAnimals'
import AllLostAnimals from './LostAnimals'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="header-block">
        {/* <img src="/images/banner.png" alt="banner" /> */}
        <p>We help reunite lost pets with their owners.</p>
      </div>
      <div className="list-container">
        <div className="list-lost">
          {/* feel free to change to another clickable thing */}
          <Link to="lost">See all lost animals</Link>
        </div>
        <div className="list-found">
          {/* feel free to change to another clickable thing */}
          <Link to="found">See all found animals</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
