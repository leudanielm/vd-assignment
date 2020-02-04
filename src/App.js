import React from 'react';
import { Provider, observer, inject } from 'mobx-react';

import moviesStore from './stores/MoviesApiStore';

function App() {
  return (
    <Provider moviesStore={moviesStore}>
    </Provider>
  );
}

export default App;
