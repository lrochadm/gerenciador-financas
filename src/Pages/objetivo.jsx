import "./objetivo.css";
import { useState, useEffect } from "react";

function Objetivo() {
  const arrayTemp = [
    {
      descricao: "Aumento do salário",
      valor: 10000,
      status: "Completa"
    },
    {
      descricao: "Match",
      valor: 8000,
      status: "Completa"
    },
    {
      descricao: "Salário",
      valor: 2005,
      status: "Completa"
    },
  ];

  const [entradas,setEntradas] = useState([])

  useEffect(() =>{
    setEntradas(arrayTemp)
  });

  return (
    <div className="page-container">
      <div className="content-title">
        <h2>Objetivos</h2>
        <button>Adicionar Objetivo</button>
      </div>
      <div className="list-objetivo">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
              entradas.map((item, index) => (
                <tr key={index}>
                  <td>{item.descricao}</td>
                  <td>{item.valor}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Objetivo;
