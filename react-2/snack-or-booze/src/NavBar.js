import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

function NavBar () {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink id = 'snacks'exact to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/newItem">Add Item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar
