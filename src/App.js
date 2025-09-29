import './App.css';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import CardFlip from './Components/CardFlip';
import Certificate from './Components/Certificates'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="floating_section"><CardFlip /></div>
      <div className="section-container">
        <div className='section'><About /></div>
        <div className='section'><Skills /></div>
        <div className='section'><Projects /></div>
        <div className="section"><Certificate /></div>
      </div>
    </div>
  );
}

export default App;
