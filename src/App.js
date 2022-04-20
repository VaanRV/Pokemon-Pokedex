import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Pokedex from './Pages/Pokedex';

const App = () => {
  return(
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/pokedex" element={<Pokedex/>}/>
            </Routes>
          </div>
        </Router>
      </div>
  )
}
export default App;