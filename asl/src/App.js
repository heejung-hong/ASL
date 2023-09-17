import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './screens/Homepage';
import GameSelect from './screens/GameSelect';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/'element={<Homepage/>}/>
      <Route path='/GameSelect' element={<GameSelect/>}/>
    </Routes>

    </div>
  );
}

export default App;
