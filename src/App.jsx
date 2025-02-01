
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { Cart } from './Pages/Cart.jsx'
import { Items } from './Pages/Items.jsx'
import Navbar from "./components/Navbar.jsx";


function App() {

  return (

      <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/items" element={<Items/>}/>
    </Routes>
  </Router>
      </>
  )
}

export default App
