

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation.js';
import Footer from "./components/layout/Footer.js";
import Navbar from "./components/layout/Navbar.js";
/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <input type='date' format="dd/MM/yyyy" /> */}
        <Navbar />
        <Navigation />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
