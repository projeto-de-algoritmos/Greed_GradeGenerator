import "./App.css";
import React, { useState } from "react";
import AddModal from "./components/modal";
import {minimizeLateness, intervalScheduling} from "./algorithm";

function App() {
  const [arrayTasks, setArrayTasks] = useState([]);

  function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

  const Emoji = React.memo(({ className, label, symbol }) =>
  symbol === ""? <span></span>:
  <span className={className} role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
  </span>)
  
   const handleArrayChange= (data)=> {
   setArrayTasks(arrayTasks => [...arrayTasks, data]);
  }

  const handleRemoveItem = (obj) => {
     setArrayTasks(arrayTasks.filter(item => item.name !== obj.name))
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
        botão abaixo para inserir uma tarefa que precisa ser feita nos próximos dias. Depois disso, preencha as
        informações requisitadas. Quando inserir todas as tarefas que quer
        fazer, clique no botão para gerar a ordenação das atividades com o menor atraso.
      </p>

      <div class="center">
        <AddModal handleArrayChange = {handleArrayChange}/>
        <button type="button" class="btn btn-success btn-margin" onClick={()=>minimizeLateness(arrayTasks)}>
          MINIMIZE LATENESS
        </button>
        <button type="button" class="btn btn-info btn-margin" onClick={()=>intervalScheduling(arrayTasks)}>
          INTERVAL SCHEDULING
        </button>
      </div>

      <div class="margin">
        <table class="table table-striped table-hover">
          <thead>
            <tr class="margin text-center">
              <th scope="col">NOME DA ATIVIDADE</th>
              <th scope="col">DEADLINE</th>
              <th scope="col">DURAÇÃO</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {arrayTasks.map((obj) => {
              return (
                <tr class="margin text-center">
                  <th scope="row">{obj.name}</th>
                  <td>{obj.deadline.getDate()+'/'+padWithLeadingZeros((obj.deadline.getMonth()+1),2)+'/'+obj.deadline.getFullYear()}</td>
                  <td>{obj.duration+' dias'}</td>
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
