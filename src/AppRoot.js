import React from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import moviesStore from './stores/MoviesApiStore';

// Allow observables manipulations only through actions
configure({ enforceActions: 'always' });

function AppRoot() {
  return (
    <Provider moviesStore={moviesStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default AppRoot;
