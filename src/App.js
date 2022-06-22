import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Show from './components/Show/Show';
import Infographics from './components/Infographics/Infographics';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/show" element={<Show />} />
                    <Route path="/infographics" element={<Infographics />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App