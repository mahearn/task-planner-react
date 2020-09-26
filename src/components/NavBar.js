import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Context from '../context/Context';

function NavBar() {
  const { state, actions } = useContext(Context);

  //ensure that cannot open a task in edit mode via this add button
  state.isEditMode = false;
  const msg = state.errorMessages.addBtn;

  const handleShow = () => {
    actions({ type: 'TOGGLE_MODAL', payload: { ...state, isShowModal: true } });
  };
  const handleEditMode = () => {
    document.querySelector('.alert-warning');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Task Planner </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <i
            className="fa fa-plus"
            aria-hidden="true"
            onClick={!state.isEditMode ? handleShow : handleEditMode}
          ></i>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
