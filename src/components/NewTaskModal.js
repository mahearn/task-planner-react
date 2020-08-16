import React, { useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { TaskContext } from '../context/TaskContext';

function NewTaskModal() {
  const { modal } = useContext(TaskContext);
  const [show, setShow] = modal;

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Task Planner</Modal.Title>
      </Modal.Header>
      <Form className="needs-validation" noValidate>
        <Modal.Body>
          <input id="taskId" type="hidden" value="" />
          <input id="isEditMode" type="hidden" value="false" />
          <Form.Group controlId="taskName">
            <Form.Label>
              Task name <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              maxLength="50"
              aria-describedby=""
              required
            />
          </Form.Group>

          <Form.Group controlId="taskAssignedTo">
            <Form.Label>
              Assigned to <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              maxLength="50"
              aria-describedby=""
              required
            />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label>
              Description <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control as="textarea" rows="3" required></Form.Control>
          </Form.Group>

          <Form.Group controlId="taskDueDate">
            <Form.Label>
              Due date <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control type="date" aria-describedby="" required />
            <div className="invalid-feedback">Give this task a due date</div>
          </Form.Group>

          <Form.Group controlId="taskStatus">
            <Form.Label>
              Status <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control as="select" defaultValue="" required>
              <option disabled>Choose...</option>
              <option>TODO</option>
              <option>IN PROGRESS</option>
              <option>REVIEW</option>
              <option>DONE</option>
            </Form.Control>
            <div className="invalid-feedback">Give this task a status</div>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save changes</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default NewTaskModal;