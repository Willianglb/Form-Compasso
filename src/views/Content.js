import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';

const Content = () => (
    <main className="Content">
        <Switch>
            <Route path="*">
                    <Login />
            </Route>
        </Switch>
    </main>
)
export default Content