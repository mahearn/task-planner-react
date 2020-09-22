import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Context from '../context/Context';

function NavBar() {
  const { state, actions } = useContext(Context);

  const handleShow = () => {
    console.log(state.currentId);
    actions({ type: 'TOGGLE_MODAL', payload: { ...state, show: true } });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Task Planner </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <i className="fa fa-plus" aria-hidden="true" onClick={handleShow}></i>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
