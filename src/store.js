import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import trails from './data/trails';
import updates from './data/updates';
import users from './data/users';

// create an object for the default data
const defaultState = {
		trails: trails || [],
		updates: updates || [],
		users: users || []
};

// create store
const store = createStore(rootReducer, defaultState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const history = syncHistoryWithStore(browserHistory, store);

// hot loading support
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
