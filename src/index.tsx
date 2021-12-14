import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import AuthProvider from './component/context/AuthContext'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
			<AuthProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <App />
        </QueryClientProvider>
			</AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

