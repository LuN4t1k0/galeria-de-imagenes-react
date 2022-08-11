import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GaleryCard from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Header title={"Galeria de imagenes con React"} />
      <div className="galery">
        <GaleryCard
          title={"Thor: Love and Thunder"}
          url={
            "https://ww3.cuevana.pro/resize/1720/storage/39928/11qu9vWcOck3GCbIrmzcx1Y4iAGlMR88iwVKRiai.jpg"
          }
          description={
            "Cuarta película sobre Thor del MCU, en la que el Dios del trueno contará con Lady Thor como acompañante, personaje que interpretará Natalie Portman."
          }
          btnLink={"https://ww3.cuevana.pro/pelicula/thor-love-and-thunder"}
        />
        <GaleryCard
          title={"Top Gun: Maverick"}
          url={
            "https://ww3.cuevana.pro/resize/1720/storage/40949/XKKGyOMezbQiQfwiuWk9VUn9vRJejtlNUg1OVmfP.jpg"
          }
          description={
            "Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete Mavericks Mitchel se encuentra dónde siempre quiso estar "
          }
          btnLink={"https://ww3.cuevana.pro/pelicula/top-gun-maverick"}
        />
        <GaleryCard
          title={"Jurassic World: Dominion"}
          url={
            "https://ww3.cuevana.pro/resize/1720/storage/40950/kbKAWFKre46z5owIiD1x3ztPUUPVAJdbM7fCeAJV.jpg"
          }
          description={
            "Cuatro años después de la destrucción de Isla Nublar, los dinosaurios conviven – y cazan – con los seres humanos en todo el mundo."
          }
          btnLink={"https://ww3.cuevana.pro/pelicula/jurassic-world-dominion"}
        />
        <GaleryCard
          title={"Lightyear"}
          url={
            "https://ww3.cuevana.pro/resize/1720/storage/36714/2hWG2xQksi4C8jR22z1thOjia7BtKtocPVyAqWIE.jpg"
          }
          description={
            "Atrapado en un planeta hostil a millones de años luz de la Tierra, Buzz Lightyear intenta encontrar la manera de volver a casa"
          }
          btnLink={"https://ww3.cuevana.pro/pelicula/lightyear"}
        />
      </div>
      <Footer description={"Imagenes de Star Wars"} />
    </>
  );
}

export default App;
