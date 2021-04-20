import React, { useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Theme from '../Themes/index';
import Context, {appContext} from '../components/Store/Context';

const Content = props => {
    const {nome, email, senha} = useContext(appContext);
    console.log(nome, email, senha)
    
    return (
        
    <main className="Content">
        <Context>
            <Switch>
                <Route path="/login">
                    <Theme>
                        <Login />
                    </Theme>
                </Route>
                <Route exact path="/">
                    <Theme>
                        <Cadastro />
                    </Theme>
                </Route>
            </Switch>
        </Context>
    </main>

    )
};

export default Content;