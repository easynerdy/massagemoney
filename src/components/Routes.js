import React from 'react';
import { browserHistory } from 'react-router';
import Clients from './Clients';
import NewClient from './NewClient';

export default class Routes extends React.Component {

  render() {
    var hashHistory = ReactRouter.hashHistory;
    return <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="clients" component={Clients} />
          <Route path="new" component={NewClient} />
      </Route>
    </Router>
  }
}