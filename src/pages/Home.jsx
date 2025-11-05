import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import BlogSection from '../components/BlogSection';

const Home = ({ onNavigate }) => (
  <>
    <Hero />
    <Services />
    <Gallery />
    <About />
    <Contact />
    <BlogSection onNavigate={onNavigate} />
  </>
);

export default Home;
