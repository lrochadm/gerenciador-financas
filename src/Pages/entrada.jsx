import "./entrada.css";
import { useState, useEffect } from "react";

const arrayTemp = [
  {
  descricao:"Salário",
  data:"05/07",
  valor:3500.5

},
{
  descricao:"Match",
  data:"05/08",
  valor:3200

},
{
  descricao:"Salário",
  data:"05/09",
  valor:3500.9
}]

function Entrada() {
  const [entradas,setEntradas] = useState([])

  useEffect(() =>{
    setEntradas(arrayTemp)
  });

  return (
    <div className="page-container">
      <div className="content-title">
        <h2>Entradas</h2>
        <button>Adicionar Entrada</button>
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

export default Entrada;
