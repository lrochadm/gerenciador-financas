import "./navmenu.css";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <Link to="/carteira">Minha Carteira</Link>
      <Link to="/entrada">Entradas</Link>
      <Link to="/saida">Saidas</Link>
      <Link to="/objetivo">Meus Objetivos</Link>
    </div>
  );
}

export default Menu;
