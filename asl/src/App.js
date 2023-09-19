import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './screens/Homepage';
import GameSelect from './screens/GameSelect';
import GameScreen from './screens/GameScreen';
import LearningScreen from './screens/LearningScreen';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/'element={<Homepage/>}/>
      <Route path='/GameSelect' element={<GameSelect/>}/>
      <Route path='/GameScreen' element={<GameScreen/>}/>
      <Route path='/LearningScreen' element={<LearningScreen/>}/>
    </Routes>
    </div>
  );
}

export default App;
