import React from 'react';
import './App.scss';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      <Products />
    </div>
  );
}

export default App;
