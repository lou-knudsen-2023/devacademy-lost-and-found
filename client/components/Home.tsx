import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="header-block">
        <p>We help reunite lost pets with their owners.</p>
      </div>
      <div className="container is-fullhd">
        <div className="section" id="list-lost-dogs">
          <Link to="lostDogs">See all lost dogs</Link>
        </div>
        <div>
          <Link to="lostCats">See all lost cats</Link>
        </div>
        <div className="section" id="list-found-dogs">
          <Link to="foundDogs">See all found dogs</Link>
        </div>
        <div>
          <Link to="foundCats">See all found cats</Link>
        </div>
      </div>
    </div>
  )
}
export default Home
