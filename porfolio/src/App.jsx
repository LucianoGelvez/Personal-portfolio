import './utils/style/app/App.css';
import { Route, Routes } from 'react-router';
import { useContext, useState } from 'react';
import { LangContext } from './utils/LangContex';
import es from './images/flags/spain.png';
import en from './images/flags/united-kingdom.png';
import pt from './images/flags/brazil.png';
import Body from './containers/body/Body';
import Footer from './components/footer/Footer.jsx';
import ProyectDetail from './containers/projectDetail/ProjectDetail.jsx';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';


function App() {
  const lang = useContext(LangContext)

  const [brightness, setBrightness] = useState(0);

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  const textColor = 1 - brightness;

  return (
    <div className="App" style={{ backgroundColor: `rgba(${brightness * 255}, ${brightness * 255}, ${brightness * 255})`, color: `rgba(${textColor * 255}, ${textColor * 255}, ${textColor * 255})` }}>
      <div className='functions'>
        <div className='color'><input className="slider" type="range" min="0" max="1" step="0.01" value={brightness} onChange={handleBrightnessChange} />
        </div>
        <div className="banderas">
          <button onClick={() => lang.setLanguage("es-AR")}><img src={es} alt="" /></button>
          <button onClick={() => lang.setLanguage("en-US")}><img src={en} alt="" /></button>
          <button onClick={() => lang.setLanguage("pt-BR")}><img src={pt} alt="" /></button>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/Detalle-de-Proyecto/:id' element={<ProyectDetail />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>

  );
}

export default App;
