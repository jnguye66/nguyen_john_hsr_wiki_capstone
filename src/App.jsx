import { Route, Routes } from 'react-router-dom';

// Import Pages
import Homepage from './pages/homepage/Homepage.jsx';
import Characters from './pages/characters/Characters.jsx';
import Enemies from './pages/enemy/Enemies.jsx';
import Aeons from './pages/aeons/Aeons.jsx';

import './styles/App.css'

function App() {
  return (
    <>
      <div className='bg'></div>
      <Routes>
        <Route path='/home/*' element={<Homepage />} />
        <Route path='/chars' element={<Characters />} />
        <Route path='/enemy' element={<Enemies />} />
        <Route path='/aeons' element={<Aeons />} />
      </Routes>
    </>
  )
}

export default App
