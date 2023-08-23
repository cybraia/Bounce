import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Maps from './Components/Maps';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
    <div className="App" >
       <Header />
       <Hero />
       <Maps />
       <Footer />
    </div>
    </div>
  );
}

export default App;
