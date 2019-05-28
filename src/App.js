import React, { Component } from 'react';
import Footer from './Footer';
import 'bulma/css/bulma.css';
import Contact from './Contact';
import './Card.css';
import Name from './Name';
import About from './About'
import { Scroller, Section } from 'react-fully-scrolled';

const fullPageOptions = {
  transDuration: 1,
  swipeSensitivity: 80,
};

class App extends Component {
  render() {
    return (
      <div>
        <Contact />
        <Scroller {...fullPageOptions}>
          <Section> <Name /></Section>
          <Section> <About /></Section>
          <Section> <Footer /></Section>
        </Scroller>
      </div>
    );
  }
}


export default App;
