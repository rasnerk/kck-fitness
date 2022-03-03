import './App.css';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Testimonials from './components/testimonials/testimonials';
import About from './components/about/about';
import Contact from './components/contact/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
