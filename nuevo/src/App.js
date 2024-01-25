import './App.css';
import React from 'react';
import Boton from './components/Boton';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Registro from './components/Registro';
  
import { BrowserRouter as Route, Routes ,Router } from 'react-router-dom';
function App(){

  return (
    <div className="App">  
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
          </Routes> 
        </div>
      </Router>
    </div>
  );
}

export default App;

//https://colors.muz.li/palette/ffff00/aa00ff/7700b3/33ff00/24b300#google_vignette