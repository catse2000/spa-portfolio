import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
        name: "Front-End Projects",
        description: "Front End Web Projects I've completed"
    },
    {
        name: "Back-End Projects",
        description: "Back End Web Projects I've completed"
    },
    {
        name: "Team Projects",
        description: "Team projects I've worked on"
    }
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}></Nav>
      <main>
        <ContactForm></ContactForm>
        <Projects currentCategory={currentCategory}></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
