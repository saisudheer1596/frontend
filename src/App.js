
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


function App() {
  return (
    <div className="App">  
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegistrationPage />} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
