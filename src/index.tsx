import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { myStore, persistor } from './store';

import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <PersistGate persistor={persistor}>
        
        <App />

      </PersistGate>
    </Provider>
  </React.StrictMode>
);

