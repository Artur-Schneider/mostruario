import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Page01 from './pages/page01';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="/girafinha" element={<Page01 />}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
