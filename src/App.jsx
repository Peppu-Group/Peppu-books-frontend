import './App.css'
import Homepage from './Pages/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './Pages/Products'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import Features from './Pages/Features'
import Getstarted from './Pages/Getstarted'
function App() {

  return (
    <div className='App'>
      
      <Router>
      <Routes>
          <Route exact path="/getstarted" element={<Getstarted/>} />
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/features" element={<Features/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
