import './App.css'
import Homepage from './Pages/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './Pages/Products'
import Paytrack from './Pages/Paytrack'
import Connect from './Pages/Connectpay'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import Features from './Pages/Features'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import Contact from './Pages/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className='App'>
      
      <Router>
      <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/products/overview" element={<Products/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products/paytrack" element={<Paytrack/>} />
          <Route path="/products/connectpay" element={<Connect/>} />
      </Routes>
      <ToastContainer />
      </Router>
    </div>
  )
}

export default App
