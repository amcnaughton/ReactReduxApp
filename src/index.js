import React from 'react';

import { render } from 'react-dom';

// import css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css';

// import components
import App from './components/App';
import TrailList from './components/TrailList';
import TrailDetail from './components/TrailDetail';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={TrailList}></IndexRoute>
        <Route path="/trail/:trailId" component={TrailDetail}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

