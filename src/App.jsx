import { Route, Routes } from 'react-router-dom';


// Import Pages
import Homepage from './pages/homepage/Homepage.jsx';
import Characters from './pages/characters/Characters.jsx';
import Character from './pages/characters/Character.jsx';
import Aeons from './pages/aeons/Aeons.jsx';

import './styles/App.css'

function App() {
  
  return (
    <>
      <div className='bg'></div>
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/chars' element={<Characters />} />
        {/* Individual Character */}
        <Route path='/chars/:id' element={<Character />} />
        <Route path='/aeons' element={<Aeons />} />
      </Routes>
    </>
  )
}

export default App
