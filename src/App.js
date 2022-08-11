import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GaleryCard from './components/Card';

function App() {
  return (
    <>
    <Header title={"Galeria de imagenes con React"}/>
    <GaleryCard/>
    <Footer description={"Imagenes de Star Wars"}/>
    </>

  );
}

export default App;
