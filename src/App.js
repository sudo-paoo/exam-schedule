import './App.css';
import Navbar from './components/globals/Navbar';
import HeroSection from './/views/HeroSection';
import FindSchedule from './components/FindSchedule';
import Schedule from './components/Schedule';
import Footer from './components/globals/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="find-sched">
        <FindSchedule />
      </div>
      <div>
        <Schedule />
      </div>
      <Footer />
    </div>
  );
}

export default App;