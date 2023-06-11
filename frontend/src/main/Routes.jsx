// imports 
import React from 'react';
import { Routes, Route } from "react-router-dom";

//import locais

import Home from '../components/home/Home';
import UserCrud from '../components/users/UsersCrud';

export default props => (
/* Routes -> rotas 
    Route -> Caminhos da rotas
*/
<Routes>
    <Route exact path='/' element={<Home/>} />
        {/* coloco exact para / navegar so pra Home e user p/ user  */}
    <Route path='/users' element={< UserCrud/>} />
    <Route path='*' element={<Home />} />
</Routes>
);