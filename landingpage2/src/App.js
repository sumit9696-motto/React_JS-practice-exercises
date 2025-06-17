import './App.css';
import { About } from './components/Aboutus';
import { Contact } from './components/Contact';
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
// import { Pokemonn } from './components/Pokemonn';
import { Pokemonn } from './components/Pokemon';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Landingpage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/pokemon' element={<Pokemonn />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
