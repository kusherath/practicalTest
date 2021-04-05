import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././ui/web/Welcome/Welcome';
import Home from '././ui/web/Home/Home';
import Login from '././ui/web/Login/Login';
import NotFound from '././ui/web/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/home" component={Home}/>
<Route path="/login" component={Login}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;