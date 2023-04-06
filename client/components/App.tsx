import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Home from './Home'
import AllFoundAnimals from './FoundAnimals'
import AllLostAnimals from './LostAnimals'
import AddFoundForm from './FoundAnimalForm'
import AddLostForm from './LostAnimalForm'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function App() {
  return (
    <div className="container has-text-centered">
      <Header />
      <Routes>
        <Route path="found" element={<AllFoundAnimals />}></Route>
        <Route path="lost" element={<AllLostAnimals />}></Route>
        <Route path="foundForm" element={<AddFoundForm />}></Route>
        <Route path="lostForm" element={<AddLostForm />}></Route>
      </Routes>
      <div>
        <IfNotAuthenticated>
          <Login />
        </IfNotAuthenticated>

        <IfAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </IfAuthenticated>
      </div>
      <Home />
    </div>
  )
}

export default App
