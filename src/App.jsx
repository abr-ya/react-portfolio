import {
  About, Footer, Header, Skills, Testimonials, Works,
} from './containers';
import Navbar from './components/Navbar/Navbar';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
