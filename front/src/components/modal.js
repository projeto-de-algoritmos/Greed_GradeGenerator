import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Form from "react-bootstrap/Form";


  const AddModal = (props) => {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState("");
    const [sigla, setSigla] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedHour, setSelectedHour] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const animatedComponents = makeAnimated();

    const options = [
        { value: 'segunda', label: 'Segunda' },
        { value: 'terca', label: 'Terça' },
        { value: 'quarta', label: 'Quarta' },
        { value: 'quinta', label: 'Quinta' },
        { value: 'sexta', label: 'Sexta' },
        { value: 'sabado', label: 'Sábado' },
        { value: 'domingo', label: 'Domingo' },
      ]

      const optionsHours = [
        { value: '08:00', label: '08:00' },
        { value: '10:00', label: '10:00' },
        { value: '12:00', label: '12:00' },
        { value: '14:00', label: '14:00' },
        { value: '16:00', label: '16:00' },
        { value: '18:00', label: '18:00' },
      ]

      let disciplina = {
        segunda: "",
        terca: "",
        quarta: "",
        quinta: "",
        sexta: "",
        sabado: "",
        domingo: ""
      }

      function populateDisciplina (){
        for (const key of selectedDays) {
           disciplina[key.value] = "0x2714";
       }
       disciplina.nome = nome
       disciplina.sigla = sigla
       disciplina.horario = selectedHour.value
      }
    return (
      <>
        <button
          type="button"
          onClick={handleShow}
          class="btn btn-danger btn-margin"
        >
          ADICIONAR DISCIPLINA
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADICIONAR DISCIPLINA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder="Digite o nome" onChange={(e)=>{setNome(e.target.value)}} />
            </Form.Group>

        <Form.Group className="mb-3" controlId="formSigla">
            <Form.Label>Sigla</Form.Label>
            <Form.Control  placeholder="Digite a sigla" onChange={(e)=>{setSigla(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSelectDays">
            <Form.Label>Dias da semana</Form.Label>
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            placeholder= "Escolha os dias"
            isMulti
            options={options}
            onChange = {(item)=> setSelectedDays(item)}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSelectHours">
            <Form.Label>Horário</Form.Label>
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            placeholder= "Escolha as horas"
            options={optionsHours}
            onChange = {(item)=> setSelectedHour(item)}
        />
        </Form.Group>
      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              CANCELAR
            </Button>
            <Button variant="primary" onClick={()=> {
                
               populateDisciplina()
              props.handleArrayChange(disciplina)
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