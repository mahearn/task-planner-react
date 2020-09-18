import React, { useContext, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import NewTaskModal from './NewTaskModal';
import Context from '../context/Context';

function NavBar() {
  const { state, actions } = useContext(Context);

  const handleShow = () => {
    actions({ type: 'TOGGLE_MODAL', payload: { ...state, show: true } });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Task Planner </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button className="btn btn-success" onClick={handleShow}>
            New Task
          </Button>
        </Nav>
      </Navbar.Collapse>
      <NewTaskModal show={state.show} />
    </Navbar>
  );
}

export default NavBar;
