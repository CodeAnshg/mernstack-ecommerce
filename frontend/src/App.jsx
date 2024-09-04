import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './footer/Footer'
import LoginPage from './authentication/Login'
import SignupPage from './authentication/SignUp'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
          </Routes>
          <Footer/>
        </Router>
        
        
      </div>
    </>
  )
}

export default App