import "./App.css";

let arrayGrade = [
  {
    horario: "08:00",
    segunda: "Matéria 1",
    terca: "Matéria 2",
    quarta: "Matéria 3",
    quinta: "Matéria 4",
    sexta: "Matéria 5",
  },
  {
    horario: "10:00",
    segunda: "Matéria 1",
    terca: "Matéria 2",
    quarta: "Matéria 3",
    quinta: "Matéria 4",
    sexta: "Matéria 5",
  },
  {
    horario: "12:00",
    segunda: "Matéria 1",
    terca: "Matéria 2",
    quarta: "Matéria 3",
    quinta: "Matéria 4",
    sexta: "Matéria 5",
  },
];

function App() {
  return (
    <div className="App">
      <h1 class="text-center padding">Grade Generator</h1>

      <p class="margin text-center">
        Instruções: pra você usar assim assim assado você vai fazer isso aqui e
        tal.
      </p>

      <div class="margin">
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
            {arrayGrade.map((obj) => {
              return (
                <tr>
                  <th scope="row">{obj.horario}</th>
                  <td>
                    <button type="button" class="btn">
                      {obj.segunda}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn">
                      {obj.terca}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn">
                      {obj.quarta}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn">
                      {obj.quinta}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn">
                      {obj.sexta}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn">
                      {obj.sabado}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn">
                      {obj.domingo}
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
