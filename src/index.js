import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import RouteManager from './config/RouteManager';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
