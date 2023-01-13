import "./App.css";
import React, { useState } from "react";
import AddModal from "./components/modal";
import intervalScheduling from "./algorithm";

function App() {
  const [arrayGrade, setArrayGrade] = useState([]);

  const Emoji = React.memo(({ className, label, symbol }) =>
  symbol === ""? <span></span>:
  <span className={className} role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
  </span>)
  
   const handleArrayChange= (data)=> {
   setArrayGrade(arrayMaterias => [...arrayMaterias, data]);
  }

  const handleRemoveItem = (obj) => {
     
     setArrayGrade(arrayGrade.filter(item => item.nome !== obj.nome))
   };

  return (
    <div className="App">
      <img
        alt="logo"
        class="center-img"
        width="1500px"
        src={require("./img/logo.png")}
      />

      <p class="margin text-center">
        <strong>INSTRUÇÕES:</strong> Para você usar a aplicação, basta clicar no
        botão abaixo para inserir uma disciplina que quer cursar no próximo
        semestre e considerar no gerador de grades. Depois disso, preencha as
        informações requisitadas. Quando inserir todas as disciplinas que quer
        ver nas grades geradas, clique no botão para gerar a grade.
      </p>

      <div class="center">
        <AddModal handleArrayChange = {handleArrayChange}/>
        <button type="button" class="btn btn-success btn-margin" onClick={()=>intervalScheduling(arrayGrade)}>
          GERAR GRADES
        </button>
      </div>

      <div class="margin">
        <table class="table table-striped table-hover">
          <thead>
            <tr class="margin text-center">
              <th scope="col">NOME</th>
              <th scope="col">SIGLA</th>
              <th scope="col">HORÁRIO</th>
              <th scope="col">SEGUNDA</th>
              <th scope="col">TERÇA</th>
              <th scope="col">QUARTA</th>
              <th scope="col">QUINTA</th>
              <th scope="col">SEXTA</th>
              <th scope="col">SÁBADO</th>
              <th scope="col">DOMINGO</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
            {arrayGrade.map((obj) => {
              return (
                <tr class="margin text-center">
                  <th scope="row">{obj.name}</th>
                  <td>{obj.abbreviation}</td>
                  <td>{obj.startTime}</td>
                  <td><Emoji symbol= {obj.segunda}/></td>
                  <td><Emoji symbol= {obj.terca}/></td>
                  <td><Emoji symbol= {obj.quarta}/></td>
                  <td><Emoji symbol= {obj.quinta}/></td>
                  <td><Emoji symbol= {obj.sexta}/></td>
                  <td><Emoji symbol= {obj.sabado}/></td>
                  <td><Emoji symbol= {obj.domingo}/></td>
                  <td className="center">
                    <button type="button" class="btn" onClick={()=>{handleRemoveItem(obj)}}>
                        <Emoji className="hover" symbol= "0x274C"/>
                    </button>
                   </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
