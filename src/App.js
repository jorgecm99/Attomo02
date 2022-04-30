import './App.css';
import Header from './Componentes/Core/Header';
import Footer from './Componentes/Core/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Landing from './Componentes/Landing/Landing';

function App() {
  return (
    <Router>
    <Header/>
    <Landing/>
    <Footer/>
    </Router>
  );
}

export default App;
