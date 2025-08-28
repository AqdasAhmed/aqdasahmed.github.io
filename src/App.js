import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import CardFlip from './Components/CardFlip';

function App() {
  return (
    <div className="App">
      <div className="floating_section"><CardFlip/></div>
      <div className='section'><About /></div>
      <div className='section'><Skills /></div>
      <div className='section'><Projects /></div>
      <div className='floating_section'><Contact /></div>
    </div>
  );
}

export default App;
