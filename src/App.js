import React from 'react'
import Header from './components/Header';
import Pages from './pages/Pages';
import Cuisine from './pages/cuisine/CuisinePage'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
