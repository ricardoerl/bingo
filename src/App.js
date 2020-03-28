import React from 'react';
import items from './App.json';
import './App.css';

import Card from './components/Card';

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  return (
    <div className="wrapper">
      {shuffle(items).map(item => (
        <Card key={item.id} label={item.label} />
      ))}
    </div>
  );
}

export default App;
