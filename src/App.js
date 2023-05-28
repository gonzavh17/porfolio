import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Main/Home';
import Section1 from './Components/Main/Section/Section1/Section1';
import Section2 from './Components/Main/Section/Section2/Section2';
// import ThreeCanvas from '../src/Components/Three/ThreeCanvas';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  );
}

export default App;
