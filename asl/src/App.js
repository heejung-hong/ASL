import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './screens/Homepage';
import GameSelect from './screens/GameSelect';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/'element={<Homepage/>}/>
      <Route path='/GameSelect' element={<GameSelect/>}/>
    </Routes>
    <NavBar></NavBar>

    </div>
  );
}

export default App;
