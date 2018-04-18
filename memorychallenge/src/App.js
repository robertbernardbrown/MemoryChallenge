import React, { Component } from 'react';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import FixedHeader from "./components/FixedHeader";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer"
import Dogs from "./dogs.json"
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <FixedHeader/>
        <Header/>
          <CardContainer dogs={Dogs}/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
