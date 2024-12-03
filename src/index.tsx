import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {SplitFactoryProvider} from '@splitsoftware/splitio-react';
import './index.css';
import sdkConfig from './sdkConfig';
import App from './App';

// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <SplitFactoryProvider config={sdkConfig}>
      <App />
    </SplitFactoryProvider>
  </StrictMode>
);
