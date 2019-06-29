import React from 'react';
import './App.css';

import CodingLinks from '../CodingLinks.json'
import CodingExample from './CodingExample'

const App: React.FC = () => {
  return (
    <div className="App">
      {CodingLinks.map(link => <CodingExample key={link.name} {...link} />)}
    </div>
  );
}

export default App;
