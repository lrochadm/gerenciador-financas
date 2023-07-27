import "./App.css";

import Menu from "./componentes/navmenu";
import Header from "./componentes/header";

import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="divapp">
        <Menu />
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
