import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { render } from '@testing-library/react';
function App() {
  render()
  {
    return (
      <div className="container">
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}
export default App;