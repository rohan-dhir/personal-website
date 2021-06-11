import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <NavBar />
        <div className="wrapper">
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </div>
    </div>
  );
}

export default App;
