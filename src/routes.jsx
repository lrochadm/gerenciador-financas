import { Routes, Route } from 'react-router-dom'

import Entrada from './componentes/Pages/entrada';
import Saida from './componentes/Pages/saida';
import Carteira from './componentes/Pages/carteira';
import Objetivo from './componentes/Pages/objetivo';

function RoutesApp(){
    return(

        <Routes>

            <Route path='/entrada' element={ <Entrada/> }/>
            <Route path='/saida' element={ <Saida/> }/> 
            <Route path='/carteira' element={ <Carteira/> }/> 
            <Route path='/objetivo' element={ <Objetivo/> }/>

        </Routes>

    )
}

export default RoutesApp;