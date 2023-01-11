import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function App() {

  function FormFloatingBasicExample() {
    return (
      <>
        <FloatingLabel
          controlId="floatingTextarea"
          className="mb-3"
        >
          <Form.Control as="input" placeholder="Nome da disciplina" />
          <Form.Control as="input" placeholder="Sigla da disciplina" />
        </FloatingLabel>
      </>
    );
  }

  function AddSubject() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button type="button" onClick={handleShow} class="btn btn-danger btn-margin">ADICIONAR DISCIPLINA</button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADICIONAR DISCIPLINA</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormFloatingBasicExample/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              CANCELAR
            </Button>
            <Button variant="primary" onClick={handleClose}>
              INSERIR
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div className="App">
      <img alt="logo" class="center-img" width="1500px" src={require('./img/logo.png')} />

      <p class="margin text-center"><strong>INSTRUÇÕES:</strong> Para você usar a aplicação, basta clicar no botão abaixo para inserir uma disciplina que quer cursar no próximo semestre e considerar no gerador de grades. Depois disso, preencha as informações requisitadas. Quando inserir todas as disciplinas que quer ver nas grades geradas, clique no botão para gerar a grade.</p>
      
      <div class="center">
        <AddSubject/>
        <button type="button" class="btn btn-success btn-margin">GERAR GRADES</button>
      </div>

      <div class ="margin">
        <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">HORÁRIO</th>
                <th scope="col">SEGUNDA</th>
                <th scope="col">TERÇA</th>
                <th scope="col">QUARTA</th>
                <th scope="col">QUINTA</th>
                <th scope="col">SEXTA</th>
                <th scope="col">SÁBADO</th>
                <th scope="col">DOMINGO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">08:00</th>
                <td>VAZIO</td>
                <td>VAZIO</td>                
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
              </tr>
              <tr>
                <th scope="row">09:00</th>
                <td>VAZIO</td>
                <td>VAZIO</td>                
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
              </tr>
              <tr>
                <th scope="row">10:00</th>
                <td>VAZIO</td>
                <td>VAZIO</td>                
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
                <td>VAZIO</td>
              </tr>
            </tbody>
          </table>
      </div>

    </div>
  );
}

export default App;
