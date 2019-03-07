import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MainWrapper from './components/MainWrapper';
import Issues from './components/Issues';
import { theme } from './helpers/config';
import Header from './components/Header';

// Note: I didn't use redux for this simple application

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
