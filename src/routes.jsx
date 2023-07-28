import { Routes, Route } from 'react-router-dom'

import Entrada from './Pages/entrada';
import Saida from './Pages/saida';
import Carteira from './Pages/carteira';
import Objetivo from './Pages/objetivo';

function RoutesApp(){
    return(

        <Routes>

            <Route path='/entrada' element={ <Entrada/> }/>
            <Route path='/saida' element={ <Saida/> }/> 
            <Route path='/carteira' element={ <Carteira/> }/> 
            <Route path='/objetivo' element={ <Objetivo/> }/>

        </Routes>

    );
};

export default RoutesApp;