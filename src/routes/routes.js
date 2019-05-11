import {Route, Switch} from 'react-router-dom';
import React from 'react';

const appRoutes = props => {
    return (
        <Switch>
            <Route path="/movie"></Route>
        </Switch>
    )
}
export default appRoutes;