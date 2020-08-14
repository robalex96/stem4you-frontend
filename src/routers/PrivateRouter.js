import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ActivitiesScreen } from '../components/activities/ActivitiesScreen';


export const PrivateRouter = () => {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={ ActivitiesScreen }
            />

            <Redirect to="/" />
        </Switch>
    )
}
