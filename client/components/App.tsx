import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import AllFoundAnimals from './FoundAnimals'
import AllLostAnimals from './LostAnimals'
import AddFoundForm from './FoundAnimalForm'
import AddLostForm from './LostAnimalForm'

function App() {
  return (
    <div className="container has-text-centered">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="foundDogs"
          element={<AllFoundAnimals defaultTo="dog" />}
        ></Route>
        <Route
          path="foundCats"
          element={<AllFoundAnimals defaultTo="cat" />}
        ></Route>
        <Route
          path="lostDogs"
          element={<AllLostAnimals defaultTo="dog" />}
        ></Route>
        <Route
          path="lostCats"
          element={<AllLostAnimals defaultTo="cat" />}
        ></Route>

        <Route path="foundForm" element={<AddFoundForm />}></Route>
        <Route path="lostForm" element={<AddLostForm />}></Route>
      </Routes>
    </div>
  )
}

export default App
