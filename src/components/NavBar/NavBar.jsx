import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

// Reference => https://www.w3schools.com/react/react_conditional_rendering.asp
function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      // If there is token
      setIsLoggedIn(true)
    }else {
      setIsLoggedIn(false)
    }
  }, [])
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ fontSize: '20px', color: 'black', fontWeight: 400 }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {!isLoggedIn && (
            <>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            </>
            )}
            {isLoggedIn && (
              <>
              <li className="nav-item">
                  <Link className="nav-link" to="/allevents">Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events/add">Add Event</Link>
                </li>
                <li className="nav-item">
                  {/* <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button> */}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
