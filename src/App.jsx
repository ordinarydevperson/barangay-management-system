import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/home.jsx';
import About from './pages/About/About.jsx';
import Admin from './pages/Admin/Admin.jsx';  
import Footer from './components/Footer/Footer.jsx';

function App() {
  // const [count, setCount] = useState(0)
  // const [activity, setActivity] = useState([])
  // useEffect(() => {
  //  const fetchItem = async () => {
  //   try {
  //     const res = await fetch('http://localhost/barangay/api/activity/read.php');
  //     const jsonData = await res.json()
  //     setActivity(jsonData.data)
  //   } catch (error) {
  //     console.log({error})
  //   }
  //  }
  //  fetchItem()
  // }, [])

  return (
    <>
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path='/admin' element={<Admin />}/>
        </Routes>
      <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
