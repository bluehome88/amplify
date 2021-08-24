import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Featured from './components/Featured';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Featured />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
