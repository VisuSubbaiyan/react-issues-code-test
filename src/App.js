import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import MainWrapper from './components/MainWrapper';
import Issues from './components/Issues';
import { theme } from './helpers/config';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header />
          <Issues />
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
