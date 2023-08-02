import "./saida.css";
import { useState, useEffect } from "react";

const arrayTemp = [
  {
  descricao:"Escola",
  data:"05/07",
  valor:3500.5

},
{
  descricao:"Vôlei",
  data:"05/08",
  valor:3200

},
{
  descricao:"Curso",
  data:"05/09",
  valor:3500.9
}]

function Saida() {
  const [entradas,setEntradas] = useState([])

  useEffect(() =>{
    setEntradas(arrayTemp)
  });

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
          {
              entradas.map((item, index) => (
                <tr key={index}>
                  <td>{item.descricao}</td>
                  <td>{item.data}</td>
                  <td>{item.valor}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saida;
