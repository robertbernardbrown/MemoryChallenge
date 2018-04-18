import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
