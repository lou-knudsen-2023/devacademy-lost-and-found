import AllFoundAnimals from './FoundAnimals'
import AllLostAnimals from './LostAnimals'

function Home() {
  return (
    <div className="container">
      <div className="header-block">
        <img src="/images/banner.png" alt="banner" />
        <p>We help reunite lost pets with their owners.</p>
      </div>
      <div className="list-lost">
        <AllLostAnimals />
      </div>
      <div className="list-found">
        <AllFoundAnimals />
      </div>
    </div>
  )
}

export default Home
