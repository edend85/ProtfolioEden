import './styles/Styels.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Protfolio from './Components/Protfolio';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Menu />
        <Routes>
          <Route path='/'
            element={
              <>
                <Header />
                <AboutMe />
                <Protfolio />
              </>
            }>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
