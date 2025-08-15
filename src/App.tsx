import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Exchange from './pages/Exchange';
import News from './pages/News';
import HowItWorks from './pages/HowItWorks';
import ForResearchers from './pages/ForResearchers';
import ForInvestors from './pages/ForInvestors';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Exchange />} />
            <Route path="/news" element={<News />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/researchers" element={<ForResearchers />} />
            <Route path="/investors" element={<ForInvestors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;