import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { TaskContext } from '../context/TaskContext';

// import NewTaskModal from './NewTaskModal';

function NavBar() {
  const { modal } = useContext(TaskContext);
  const [show, setShow] = modal;

  const handleShow = () => setShow(true);

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
    </Navbar>
  );
}

export default NavBar;
