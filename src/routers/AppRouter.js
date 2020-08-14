import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { AboutScreen } from '../components/about/AboutScreen';
import { ActivitiesScreen } from '../components/activities/ActivitiesScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                <Route
                    path='/auth/login'
                    component={ LoginScreen }
                />
                <Route
                    path='/auth/register'
                    component={ RegisterScreen }
                />
                <Route
                    path='/activities'
                    component={ ActivitiesScreen }
                />
                <Route
                    path='/about'
                    component={ AboutScreen }
                />

                <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
