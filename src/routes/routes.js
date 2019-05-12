import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom'
import ResultGrid from '../component/ResultGrid'
import MovieBrowser from '../component/movie/MovieBrowse'
import App from '../App';

const topRoutes = () => (
    <Switch>
        {/* In secure route this will be login page */}
        <Route path="/" component={appComponent} />
        {/* Can use secure path here  */}
    </Switch>
);
function appComponent(props) {
    return (<App {...props} approutes={appRoutes()} />);
}

const appRoutes = () => (
    <React.Fragment>
        <Route path="/" exact component={ResultGrid} />
        <Route path="/movie" component={MovieBrowser} />
    </React.Fragment>
);

export default topRoutes;