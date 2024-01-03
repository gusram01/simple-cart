import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { FiltersProvider } from './context/filter.context.jsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>,
);
