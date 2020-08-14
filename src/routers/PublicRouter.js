import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { AboutScreen } from '../components/about/AboutScreen'

export const PublicRouter = () => {
    return (
        <Switch>
            <Route 
                exact
                path="/auth/login"
                component={ LoginScreen }
            />
            <Route 
                exact
                path="/auth/register"
                component={ RegisterScreen }
            />
            <Route 
                exact
                path="/auth/about"
                component={ AboutScreen }
            />

            <Redirect to="/auth/login" />
        </Switch>
    )
}
