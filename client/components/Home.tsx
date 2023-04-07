import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="">
      <div className="header-block">
        <h2 className="title is-2 p-3">We help reunite lost pets with their owners.</h2>
      </div>

      <section className="is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap">

        <figure className="home-animals" >
          <Link to="lostDogs">
            <img src="./images/lost-dogs.svg" alt="" />
            See all lost dogs
            </Link>
        </figure>

        <figure className="home-animals">
          <Link to="lostCats">
          <img src="./images/lost-cats.svg" alt="" />
            See all lost cats
            </Link>
        </figure>

        <figure className="home-animals" >
          <Link to="foundDogs">
          <img src="./images/found-dogs.svg" alt="" />
            See all found dogs
            </Link>
        </figure>

        <figure className="home-animals">
          <Link to="foundCats">
          <img src="./images/found-cats.svg" alt="" />
            See all found cats
            </Link>
        </figure>
        
    </section>
      </div>


  )
}
export default Home
