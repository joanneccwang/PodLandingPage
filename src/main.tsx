import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    green: '#54E6AF',
    black: '#121725',
    gray3: '#2C344B',
    gray2: '#5A668A',
    gray1: '#C2CBE5',
    white: '#FFFFFF',
  },
  borderRadius: '28px',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
