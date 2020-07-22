import React from 'react';
import './App.sass';
import Header from './components/header'
import Section from './components/section'

function App() {
  return (
    <div className="app">
      <Header/>
      <Section
        color="light"
        title="Fade In Animation"
        subtitle="Using Framer Motion"
      />
      <Section
        color="dark"
        title="Yet Another Fade In Animation"
        subtitle="Using Framer Motion"
      />
    </div>
  );
}

export default App;
