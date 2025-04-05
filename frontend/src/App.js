import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Foodmenu from './components/Foodmenu.js';
import Cart from './components/Cart';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
         






        </Routes>
       
      </div>
    </Router>

  );
}


export default App;
