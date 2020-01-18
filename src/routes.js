import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main';
import Product from './pages/product'

/* BrowserRouter: diz que vamos mudar as rotas via Browser
Switch: Vai permitir que apenas uma única rota possa ser chamada ao mesmo tempo, ou seja, 
exibirá apenas um único componente por rota. A propiedade exact vai garantir o path exato*/
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Main } />
            <Route path='/products/:id' component={ Product } />
        </Switch>
    </BrowserRouter>
);

export default Routes;

