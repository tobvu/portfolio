import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hobby from './components/Hobby';
import OMnie from './components/OMnie';
import Miekkie from './components/Miekkie';
import Kontakt from './components/Kontakt';
import Umiejetnosci from './components/Umiejetnosci';
import Projekty from './components/Projekty';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
   <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/portfolio" element={<Home />} />
       <Route path="/hobby" element={<Hobby />} />
       <Route path="/omnie" element={<OMnie />} />
       <Route path="/miekkie" element={<Miekkie />} />
       <Route path="/kontakt" element={<Kontakt />} />
       <Route path="/projekty" element={<Projekty />} />
       <Route path="/umiejetnosci" element={<Umiejetnosci />} />
     </Routes>
   </BrowserRouter>
   <Footer />
 </React.StrictMode>
);
