import "./entrada.css";

function Entrada() {
  return (
    <div className="page-container">
      <div className="content-title">
        <h2>Entradas</h2>
        <button type="submit">Adicionar Entrada</button>
      </div>
      <div className="list-entrada">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salário</td>
              <td>05/07</td>
              <td>3.000,00</td>
            </tr>
            <tr>
              <td>Salário</td>
              <td>05/07</td>
              <td>3.000,00</td>
            </tr>
            <tr>
              <td>Salário</td>
              <td>05/07</td>
              <td>3.000,00</td>
            </tr>
            <tr>
              <td>Salário</td>
              <td>05/07</td>
              <td>3.000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Entrada;
