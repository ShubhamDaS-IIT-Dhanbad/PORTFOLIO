import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Service from './pages/services.jsx';
import Resume from './pages/resume.jsx';
import Startup from './pages/startup.jsx';
import Contact from './pages/contact.jsx';
// import HireMe from './pages/HireMe';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>My App</title>
      </Helmet>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/hire-me" element={<HireMe />} /> */}
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}
export default App;


