import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { HotOnes } from './pages/HotOnes'

function App() {
  return (
    <BrowserRouter>
    <div>
    <ul>
      <li><NavLink to="/">HOMEPAGE</NavLink></li>
      <li><NavLink to="/hot">HOT</NavLink></li>
    </ul>

    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/hot" element={<HotOnes/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
