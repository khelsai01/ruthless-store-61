import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRouter } from './Components/AllRouter';
import { Container } from "@chakra-ui/react"
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{backgroundColor: "#0cbaba",
    backgroundImage: `linear-gradient(315deg, #0cbaba 0%, #380036 74%)`
    }}>
      <Navbar />

      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
