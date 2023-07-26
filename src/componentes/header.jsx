import './header.css'
import { Link } from 'react-router-dom';
import { BsGraphUpArrow } from 'react-icons/bs'

function Header() {

  return (
    
    <div className='container-header'>
      <div className='content-left'>
        <BsGraphUpArrow size={30} color='252E50'/>
        <h2><Link to='/'>FINANTECH</Link></h2>
      </div>
      <div className='content-right'>
        <span>Olá, Feijão</span>
      </div>    
    </div>
      
  )
}

export default Header;
