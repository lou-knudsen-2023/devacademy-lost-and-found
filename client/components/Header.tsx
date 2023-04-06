import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header() {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <header className="hero is-small is-primary">
      <div className="hero-body has-text-centered">
        <div>
          <Link to="/" className="">
            <h1 className="title is-1">Lost and Found</h1>
          </Link>
          <IfAuthenticated>
            <p className="subtitle">{user?.nickname}</p>
          </IfAuthenticated>
        </div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="menu">
              <ul>
                <li>
                  <Link to="found">
                    <h2>Found</h2>
                  </Link>
                </li>
                <li>
                  <Link to="lost">
                    <h2>Lost</h2>
                  </Link>
                </li>
                <li>
                  <Link to="foundForm">
                    <IfAuthenticated>
                      <h2>Found Form</h2>
                    </IfAuthenticated>
                  </Link>
                </li>
                <li>
                  <Link to="lostForm">
                    <IfAuthenticated>
                      <h2>Lost Form</h2>
                    </IfAuthenticated>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <IfAuthenticated>
                <button className="button is-primary" onClick={() => logout()}>
                  Logout
                </button>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button
                  className="button is-primary"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </IfNotAuthenticated>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
