import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => (
  <div className="min-h-screen flex flex-col bg-white text-gray-900">
    <NavBar />
    <main className="flex-1">
      <Home />
    </main>
    <Footer />
  </div>
);

export default App;
