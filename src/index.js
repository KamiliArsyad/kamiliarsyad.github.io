import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { hydrate, render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import RouteManager from './config/RouteManager';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';

const APP = (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

if (root.hasChildNodes()) {
  hydrate(APP, root);
} else {
  render(APP, root);
}
