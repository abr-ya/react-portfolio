import {
  About, Footer, Hello, Skills, Testimonials, Works,
} from './sections';
import Navbar from './components/Navbar/Navbar';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hello />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
