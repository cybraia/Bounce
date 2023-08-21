import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Maps from './Components/Maps'

function App() {
  return (
    <div >
    <div className="App" >
       <Header />
       <Hero />
       <Maps />
    </div>
    </div>
  );
}

export default App;
