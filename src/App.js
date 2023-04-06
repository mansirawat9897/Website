import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "../src/assets/css/all.min.css";
import "../src/assets/css/master.css";
import "../src/assets/css/meanmenu.min.css";
import "../src/assets/css/progressbar.css";
import "../src/assets/css/swiper-bundle.min.css";
import MainPage from "../src/pages/index"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

AOS.init({
  delay: 200,
  duration: 3000,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
