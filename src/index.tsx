import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import React from 'react';
import { Button } from '@techziasln/quick-ui-test'

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
