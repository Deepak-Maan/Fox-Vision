import './App.css';
import Footer from './components/common/Footer';
import ProjectStarten from './components/common/ProjectStarten';
import HowWeWorks from './components/common/HowWeWorks';
import Angebot from './components/Angebot';

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Angebot/>
      <HowWeWorks />
      <ProjectStarten />
      <Footer />

    </div>
  );
}

export default App;
