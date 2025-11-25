import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './router/Landing';
import Mickeychoi from './router/Mickeychoi';
import { MainHeader } from './components/Header/MainHeader';
import React,{useRef, useEffect, useState } from "react";
import MainFooter from './components/Footer/MainFooter';
import LegendaryHistory from './router/LegendaryHistory';
import ABIMJJ from './router/ABIMJJ';
import Worldwide from './router/Worldwide';
import SponsoredBy from './router/SponsoredBy';
import NotFound from './router/NotFound';

function App() {

  const [locate, setLocate] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locate]);

  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader locate={locate} />
        <Routes>
          <Route path='/' element={<Landing setLocate={setLocate} />} />
          <Route path='/mickeychoi' element={<Mickeychoi setLocate={setLocate} />} />
          <Route path='/legendaryhistory' element={<LegendaryHistory setLocate={setLocate} />} />
          <Route path='/ABIMJJ' element={<ABIMJJ setLocate={setLocate} />} />
          <Route path='/worldwide' element={<Worldwide setLocate={setLocate} />} />
          <Route path='/sponsoredby' element={<SponsoredBy setLocate={setLocate} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
