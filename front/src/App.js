import "./App.css";
import React, { useState } from "react";
import AddModal from "./components/modal";
import { minimizeLateness, intervalScheduling } from "./algorithm";
import CardActivity from "./components/card";

function App() {
  const [arrayTasks, setArrayTasks] = useState([]);
  const [home, setHome] = useState(true);
  const [interval, setInterval] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [variant, setVariant] = useState("light");

  const [intervalArray, setIntervalArray] = useState([]);
  const [minimizeArray, setMinimizeArray] = useState([]);

  function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }

  const Emoji = React.memo(({ className, label, symbol }) =>
    symbol === "" ? (
      <span></span>
    ) : (
      <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint(symbol)}
      </span>
    )
  );

  const changeColor = (color) => {
    setVariant(color);
    console.log(variant);
  };

  const handleArrayChange = (data) => {
    setArrayTasks((arrayTasks) => [...arrayTasks, data]);
  };

  const handleIntervalArray = () => {
    setIntervalArray(intervalScheduling(arrayTasks));
    setHome(false);
    setInterval(true);
    console.log(intervalArray);
  };

  const handleMinimize = () => {
    setMinimizeArray(minimizeLateness(arrayTasks));
    setHome(false);
    setMinimize(true);
    console.log(minimizeArray);
  };

  const handleRemoveItem = (obj) => {
    setArrayTasks(arrayTasks.filter((item) => item.name !== obj.name));
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
        botão abaixo para inserir uma tarefa que precisa ser feita nos próximos
        dias. Depois disso, preencha as informações requisitadas. Quando inserir
        todas as tarefas que quer fazer, clique no botão para gerar a ordenação
        das atividades com o menor atraso.
      </p>

      {home ? (
        <>
          <div class="center">
            <AddModal handleArrayChange={handleArrayChange} />
            <button
              type="button"
              class="btn btn-success btn-margin"
              onClick={() => handleMinimize()}
            >
              MINIMIZE LATENESS
            </button>
            <button
              type="button"
              class="btn btn-info btn-margin"
              onClick={() => handleIntervalArray()}
            >
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
                      <td>
                        {obj.deadline.getDate() +
                          "/" +
                          padWithLeadingZeros(obj.deadline.getMonth() + 1, 2) +
                          "/" +
                          obj.deadline.getFullYear()}
                      </td>
                      <td>{obj.duration + " dias"}</td>
                      <td className="center">
                        <button
                          type="button"
                          class="btn"
                          onClick={() => {
                            handleRemoveItem(obj);
                          }}
                        >
                          <Emoji className="hover" symbol="0x274C" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div></div>
      )}

      {interval ? (
        <>
          <div class="center">
            <button
              type="button"
              class="btn btn-warning btn-margin"
              onClick={() => {
                setHome(true);
                setInterval(false);
                setVariant("light");
              }}
            >
              Voltar para página inicial
            </button>
          </div>
          <div class="center">
            <div class="w-50  ">
              {intervalArray.map((obj) => {
                return (
                  <div class="padding">
                    <CardActivity
                      variant={variant}
                      header={obj.name}
                      deadline={
                        obj.deadline.getDate() +
                        "/" +
                        padWithLeadingZeros(obj.deadline.getMonth() + 1, 2) +
                        "/" +
                        obj.deadline.getFullYear()
                      }
                      description={obj.duration}
                      changeColor={changeColor}
                    >
                      {" "}
                    </CardActivity>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div> </div>
      )}

      {minimize ? (
        <>
          <div class="center">
            <button
              type="button"
              class="btn btn-warning btn-margin"
              onClick={() => {
                setHome(true);
                setMinimize(false);
              }}
            >
              Voltar para página inicial
            </button>
          </div>
          <div class="center">
            <div class="w-50  ">
              {minimizeArray.map((obj) => {
                return (
                  <div class="padding">
                    <CardActivity
                      variant={variant}
                      header={obj.name}
                      deadline={
                        obj.deadline.getDate() +
                        "/" +
                        padWithLeadingZeros(obj.deadline.getMonth() + 1, 2) +
                        "/" +
                        obj.deadline.getFullYear()
                      }
                      description={obj.duration}
                      lateness={obj.lateness}
                      changeColor={changeColor}
                    >
                      {" "}
                    </CardActivity>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default App;
