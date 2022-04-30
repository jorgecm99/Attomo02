import './App.css';
import Header from './Componentes/Core/Header';
import Footer from './Componentes/Core/Footer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header/>
    <Footer/>
    </Router>
  );
}

export default App;
