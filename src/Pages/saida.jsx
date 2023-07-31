import "./saida.css";

function Saida() {
  return (
    <div className="page-container">
      <div className="content-title">
        <h2>Saídas</h2>
        <button type="submit">Adicionar Saída</button>
      </div>
      <div className="list-saida">
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
              <td>Tim</td>
              <td>10/09</td>
              <td>45,00</td>
            </tr>
            <tr>
              <td>Tim</td>
              <td>10/09</td>
              <td>45,00</td>
            </tr>
            <tr>
              <td>Tim</td>
              <td>10/09</td>
              <td>45,00</td>
            </tr>
            <tr>
              <td>Tim</td>
              <td>10/09</td>
              <td>45,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saida;
