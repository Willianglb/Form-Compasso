import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Theme from '../Themes/index';
import DataContext, {data} from '../components/Store/DataContext';

const Content = props => {
    const [state, setState] = useState(data);
    
    return (
        
    <main className="Content">
        <DataContext.Provider value={{state, setState}}>
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
        </DataContext.Provider>
    </main>

    )
};

export default Content;