import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import About from './pages/About';
import ServiceCenters from './pages/ServiceCenters';
import Payment from './pages/Payment';

function App() {
  return (
    <Router basename="/voltron">
      <div className="app">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-centers" element={<ServiceCenters />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
