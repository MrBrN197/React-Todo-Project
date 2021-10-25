import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]


  const closeMenu = () => {
    setNavbarOpen(false);
  }

  return (
    <nav className="navBar">
      <button onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? 'Close' : 'Open'}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map( link => (
          <li key={link.id}>
            <NavLink 
              to={link.path} exact 
              activeClassName="active-link"
              onClick={() => closeMenu()}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar;
