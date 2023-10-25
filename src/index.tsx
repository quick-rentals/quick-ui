import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Button } from './components'
import React from 'react';

const root = ReactDOMClient.createRoot(document.body);

function App() {
  return (
    <Button label='test' />
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
