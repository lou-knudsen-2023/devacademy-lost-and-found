import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="header-block">
        <p>We help reunite lost pets with their owners.</p>
      </div>
      <div className="container is-fullhd">
        <div className="section" id="list-lost-dogs">
          <Link to="lost">See all lost animals</Link>
        </div>
        <div className="section" id="list-found-dogs">
          <Link to="found">See all found animals</Link>
        </div>
      </div>
    </div>
  )
}
export default Home
