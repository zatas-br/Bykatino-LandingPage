import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Freedom from './components/Freedom';
import Feedback from './components/Feedback';
import Sets from './components/Sets'
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary font-montserrat overflow-x-hidden">
      <Header />
      <main className="space-y-12">
        <Hero />
        <Features />
        <Freedom />
        <Feedback />
        <Sets />
        <Contact />
      </main>
    </div>
  );
}

export default App;