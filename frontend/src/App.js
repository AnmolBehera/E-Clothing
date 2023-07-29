import './App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import AllRoutes from './AllRoutes';
import Footer from './components/footer';
import Navbar from './components/navbar/Navbar'
import Hamburger from "./components/navbar/Hamburger";
library.add(faRegistered);
function App() {
  return (
    <div class="App">
      <Navbar />
      <Hamburger />
      <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
