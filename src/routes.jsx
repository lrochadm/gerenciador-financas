import { Routes, Route } from 'react-router-dom'

import Entrada from './componentes/Pages/entrada';
import Saida from './componentes/Pages/saida';

function RoutesApp(){
    return(

        <Routes>

            <Route path='/entrada' element={ <Entrada/> }/>
            <Route path='/saida' element={ <Saida/> }/> 

        </Routes>

    )
}

export default RoutesApp;