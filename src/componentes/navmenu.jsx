import "./navmenu.css";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <Link to="/entrada">Entrada</Link>
      <Link to="/saida">Saida</Link>
    </div>
  );
}

export default Menu;
