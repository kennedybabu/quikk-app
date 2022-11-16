import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Landingpage from './pages/Landingpage';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import { AuthContextProvider } from './context/AuthContext'


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
