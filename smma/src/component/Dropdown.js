import React from 'react'
import { NavDropdown, Nav} from 'react-bootstrap';
import '../styles/Dropdown.css'

function Dropdown(props) {
  return ( 
    <NavDropdown title={<span className='test' /*style={{ fontSize: '100%', color: 'White', fontFamily: 'Open Sans'}}*/>
      {props.name}</span>} id="basic-nav-dropdown dropdown-toggle">      
		{props.services.map(
      title => {
        return (
          <NavDropdown.Item href={title}>{title}</NavDropdown.Item>
        )
      }
    )}
    </NavDropdown>
  )
}

export default Dropdown