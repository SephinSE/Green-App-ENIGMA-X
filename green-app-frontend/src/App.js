import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Landing.css';
import Landing from './components/Landing';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
