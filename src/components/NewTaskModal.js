import React, { useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import Context from '../context/Context';

function NewTaskModal() {
  const { state, actions } = useContext(Context);

  function handleClose() {
    actions({ type: 'TOGGLE_MODAL', payload: { ...state, show: false } });
  }

  function handleSaveTask(e) {
    let id = `task${state.currentId++}`;
    let name = document.querySelector('#taskName').value;
    let description = document.querySelector('#taskDescription').value;
    let assignTo = document.querySelector('#taskAssignTo').value;
    let dueDate = document.querySelector('#taskDueDate').value;
    let status = document.querySelector('#taskStatus').value;
    let taskList = state.tasks || [];
    debugger;
    taskList.push({ id, name, description, assignTo, dueDate, status });
    actions({
      type: 'ADD_TASK',
      payload: {
        ...state,
        currentId: state.currentId++,
        tasks: taskList,
      },
    });
  }

  return (
    <Modal show={state.show} onHide={handleClose}>
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

          <Form.Group controlId="taskAssignTo">
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
          <Button variant="success" onClick={handleSaveTask}>
            Save changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default NewTaskModal;
