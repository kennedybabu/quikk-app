import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Landingpage from './pages/Landingpage';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';



function App() {
  return (
    <div>
      <Nav />
      <Routes>        
        <Route path='/' exact element={<Landingpage />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>      
    </div>
  );
}

export default App;
