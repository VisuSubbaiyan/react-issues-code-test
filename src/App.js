import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MainWrapper from './components/MainWrapper';
import Issues from './components/Issues';

class App extends Component {
  theme = {
    primary: '#20232a',
    secondary: '#ccc',
    lightGrey: '#dcdcdc',
    smallFont: '10px',
    linkColor: '#0366d6',
    breakpoints: {
      small: 640,
      medium: 769
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <MainWrapper>
          <header className="App-header">
            <p>React Issues</p>
          </header>
          <Issues />
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
