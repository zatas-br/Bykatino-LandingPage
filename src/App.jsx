import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-primary font-montserrat overflow-x-hidden">
      <Header />
      <main className="pb-20 space-y-6">
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;