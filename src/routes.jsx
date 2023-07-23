import { Routes, Route } from 'react-router-dom'

import Receita from './componentes/Pages/receita';

function RoutesApp(){
    return(

        <Routes>

            <Route path='/receita' element={ <Receita/> }/>

        </Routes>

    )
}

export default RoutesApp;