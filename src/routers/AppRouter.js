import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRouter } from './PrivateRouter'
import { PrivateRoute } from './PrivateRoute';
import { PublicRouter } from './PublicRouter';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    const { id } = useSelector(state => state.auth);

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(isLogged => id ? true : false);
    }, [id]);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path='/auth'
                        component={ PublicRouter }
                        isLogged={ isLogged }
                    />
                    <PrivateRoute 
                        exact
                        path='/'
                        component={ PrivateRouter }
                        isLogged={ isLogged}
                    />

                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
