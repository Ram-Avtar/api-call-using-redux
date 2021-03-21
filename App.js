import React from 'react';
import { Provider } from 'react-redux';
import CompJs from './CompJs';
import store from './storage/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <CompJs />
    </Provider>

  );
}
