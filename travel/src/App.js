import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRouter } from './Components/AllRouter';
import { Container } from "@chakra-ui/react"
function App() {
  return (
    <Container maxW="container.lx">
      <Navbar />
      <AllRouter />
    </Container>
  );
}

export default App;
