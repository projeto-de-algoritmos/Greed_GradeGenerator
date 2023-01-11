import './App.css';

function App() {
  return (
    <div className="App">
      <h1 class="text-center padding">Grade Generator</h1>

      <p class="margin text-center">Instruções: pra você usar assim assim assado você vai fazer isso aqui e tal.</p>

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
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>                
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
              </tr>
              <tr>
                <th scope="row">09:00</th>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>                
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
              </tr>
              <tr>
                <th scope="row">10:00</th>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>                
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
                <td><button type="button" class="btn">BOTÃO</button></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
