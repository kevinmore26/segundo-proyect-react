import HeaderBonito from "./components/Header";
//PRESIONAN CTRL + SPACE PARA FORZAR LA BUSQUEDA AL IMPORTAR
import imagen from "./logo.svg";
//CUANDO TU IMPORTAS ALGO QUE NO SEA "JS" DEBERÁS PONERLE SU EXTENSIÓN
import gato from "./assets/gato2.jpg";
import FooterBonito from "./components/Footer";

const App = () => {
  //AQUI ESTARÁ TU JS
  return (
    //SOLO DEBE TENER UN CONTENEDOR
    //DENTRO DEL RETURN ESTARÁ TODO TU DISEÑO
    //TODOS LOS COMPONENTES QUE IMPORTES DEBEN COMENZAR CON MAYUSCULA
    <div style={{ backgroundColor: "red" }}>
      <HeaderBonito></HeaderBonito>
      <HeaderBonito />
      <p>HOLA SOY UNA ETIQUETA P</p>
      <header></header>
      <div>
        <h1>HOLA REACT</h1>
      </div>

      <div>
        <img src={gato}></img>
      </div>
      <FooterBonito />
    </div>
  );
};
//NO TE OLVIDES DE EXPORTAR TU ARCHIVO PARA QUE OTROS ARCHIVOS LO PUEDAN ENCONTRAR

export default App;
