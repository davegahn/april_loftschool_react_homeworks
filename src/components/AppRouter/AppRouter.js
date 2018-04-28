import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Route, Switch } from 'react-router-dom';

import Search from 'components/Search';
import ShowPage from 'components/ShowPage';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}
export default AppRouter;
