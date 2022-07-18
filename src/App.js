import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Download from './components/Download';
import InTheNews from './components/InTheNews';
import Footer from './components/Footer';
import NoCardWaste from './components/NoCardWaste';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Hero2 from './components/Hero2';
import InterCom from './shared/InterCom';
import Started from './components/GetStartedNow/Started';



function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Hero/>
      <About/>
      <NoCardWaste/>
      <Hero2/>
      <Download/>
      <InTheNews/>
      <Started/>
      <Footer/>
      <InterCom/>

      </Router>
      
    </div>
  );
}

export default App;
