import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <div class="container site-content">
        <Route path='/' exact component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={ContactForm} />
        <Route path='/resume' component={Resume} />
      </div>
      <Footer/>
    </Router>
  )
}

export default App;
