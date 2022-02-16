import './App.css';
import Nav from './Components/nav/Nav';
import Footer from './Components/Footer'
import Home from "./pages/Home"
import Menu from "./pages/Menu" 
import About from "./pages/About"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
               <div className='content'>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route  path="/Menu" element= {<Menu />} />
                <Route path='/About' element= {<About />}/>
                <Route path='/Contact' element= {<Contact />}/>

              </Routes>

          <Footer />
              </div>
      </Router>
    </div>
  );
}

export default App;
