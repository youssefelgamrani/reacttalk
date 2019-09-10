import { Route, Switch } from 'react-router-dom';
import App from '../App';
import UserComponent from '../components/layouts/UserComponent';
import ContactComponent from '../components/layouts/ContactComponent';
import NotFound from '../components/errors/404';

import React from 'react'
export default function Routes() {
    return (
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users" component={UserComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route component={NotFound}/>
        </Switch>
    )
}