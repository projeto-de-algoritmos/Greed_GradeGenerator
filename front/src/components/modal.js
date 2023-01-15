import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

  const AddModal = (props) => {
    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [duration, setDuration] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      let task = {}

      task.name = name
      task.duration = duration
      task.deadline = new Date(deadline)
      task.deadline.setHours(task.deadline.getHours() + 3)
      task.start = new Date(deadline)
      task.start.setHours(task.start.getHours() + 3)
      task.start.setDate(task.start.getDate() - duration)
      
    return (
      <>
        <button
          type="button"
          onClick={handleShow}
          class="btn btn-warning btn-margin"
        >
          ADICIONAR TAREFA
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADICIONAR DISCIPLINA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder="Digite o nome" maxLength="40" onChange={(e)=>{setName(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Deadline</Form.Label>
                <Form.Control placeholder="Insira a data de entrega" type="date" min={new Date().toJSON().slice(0, 10)} onChange={(e)=>{setDeadline(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSigla">
                <Form.Label>Duração</Form.Label>
                <Form.Control  placeholder="Insira quantos dias levará para concluir a tarefa" type="number" min={1} onChange={(e)=>{setDuration(e.target.value)}} />
            </Form.Group>

      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              CANCELAR
            </Button>
            <Button variant="primary" onClick={()=> {
              props.handleArrayChange(task)
              handleClose()  
                }}>
              INSERIR
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } 
  
  export default AddModal;