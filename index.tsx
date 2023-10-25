import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import React from 'react';

// import {Button} from '@techziasln/quick-ui-test'
import { Button } from './src'
const root = ReactDOMClient.createRoot(document.body);

function App() {
  return (
    // <Button label='test' />
    <div>
      <Button label='hello' />
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
