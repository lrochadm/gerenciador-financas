import './header.css'

import { BsGraphUpArrow } from 'react-icons/bs'

function Header() {

  return (
    
    <div className='container-header'>
      <div className='content-left'>
        <BsGraphUpArrow size={30} color='252E50'/>
        <h2>FINANTECH</h2>
      </div>
      <div className='content-right'>
        <span>Olá, Feijão</span>
      </div>    
    </div>
      
  )
}

export default Header;
