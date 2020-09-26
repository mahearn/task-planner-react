import React, { useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import Context from '../context/Context';

function NewTaskModal() {
  const { state, actions } = useContext(Context);
  const taskToUpdate = state.currentIndexValue;
  // let taskIndex = state.currentIndex;

  function handleClose() {
    actions({
      type: 'TOGGLE_MODAL',
      payload: { ...state, isShowModal: false },
    });
  }

  function handleSaveTask(e) {
    let id;
    const name = document.querySelector('#taskName').value;
    const description = document.querySelector('#taskDescription').value;
    const assignTo = document.querySelector('#taskAssignTo').value;
    const dueDate = document.querySelector('#taskDueDate').value;
    const status = document.querySelector('#taskStatus').value;
    const taskList = state.tasks || [];

    if (!state.isEdit) {
      //is adding...
      id = `task${state.currentId++}`;
      taskList.push({ id, name, description, assignTo, dueDate, status });
      actions({
        type: 'ADD_TASK',
        payload: {
          ...state,
          tasks: taskList,
          isShowModal: false,
        },
      });
    } else {
      //is updating...
      const ls = state.tasks;
      const taskIndex = state.currentIndex;
      ls[taskIndex] = {
        id: document.querySelector('#taskId').value,
        name: name,
        description: description,
        assignTo: assignTo,
        dueDate: dueDate,
        status: status,
      };

      actions({
        type: 'UPDATE_TASK',
        payload: {
          ...state,
          currentIndex: taskIndex,
          currentIndexValue: ls[taskIndex],
          isShowModal: false,
          isEdit: true,
          tasks: ls,
        },
      });
    }
  }

  return (
    <Modal show={state.isShowModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{!state.isEdit ? 'Add task' : 'Update task'}</Modal.Title>
      </Modal.Header>
      <Form className="needs-validation" noValidate>
        <Modal.Body>
          <input
            id="taskId"
            type="hidden"
            value={state.isEdit ? taskToUpdate.id : ''}
          />
          <input id="isEditMode" type="hidden" value="false" />
          <Form.Group controlId="taskName">
            <Form.Label>
              Task name <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control
              defaultValue={state.isEdit ? taskToUpdate.name : ''}
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
              defaultValue={state.isEdit ? taskToUpdate.assignTo : ''}
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
            <Form.Control
              defaultValue={state.isEdit ? taskToUpdate.description : ''}
              as="textarea"
              rows="3"
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="taskDueDate">
            <Form.Label>
              Due date <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control
              defaultValue={state.isEdit ? taskToUpdate.dueDate : ''}
              type="date"
              aria-describedby=""
              required
            />
            <div className="invalid-feedback">Give this task a due date</div>
          </Form.Group>

          <Form.Group controlId="taskStatus">
            <Form.Label>
              Status <span className="mandatory-flag">*</span>
            </Form.Label>
            <Form.Control
              defaultValue={state.isEdit ? taskToUpdate.status : ''}
              as="select"
              required
            >
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
            {!state.isEdit ? 'Submit' : 'Save changes'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default NewTaskModal;
