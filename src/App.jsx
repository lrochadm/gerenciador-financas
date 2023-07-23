import './App.css'

import Menu from "./componentes/navmenu";
import Header from './componentes/header';

import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

function App() {

  return (
    
    <BrowserRouter>
      <RoutesApp />
      <div className='divapp'>
        
        <Header />
        <Menu />

      </div>
    
    </BrowserRouter>
      
  )
}

export default App;
