import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { GlobalStyle } from '../src/components/GlobalStyles';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#707070',
    lightGray: '#f3f4f3',
    accent: 'tomato',
    green: 'green',
    red: 'orangeRed',
    lightBlue: '#14acdf',
    error: 'red',
    orange: '#ff7628',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
