import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'virtual:uno.css'
import JLDevicInfoProvider from './context/JL_DevicInfoProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <JLDevicInfoProvider>
      <App />
    </JLDevicInfoProvider>
  </React.StrictMode>
);