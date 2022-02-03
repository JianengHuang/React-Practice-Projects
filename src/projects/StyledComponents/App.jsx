import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#daf6fd',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello</h1>;
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
