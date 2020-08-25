import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ActivitiesScreen } from '../components/activities/ActivitiesScreen';
import { ActivityScreen } from '../components/activities/ActivityScreen';


export const PrivateRouter = () => {
    return (
        <Switch>
            <Route 
                path="/activity/information"
                component={ ActivitiesScreen }
            />
            <Route
                path="/activity/:activityId"
                component= { ActivityScreen }
            />

            <Redirect to="/activity/information" />
        </Switch>
    )
}
