import './App.css';
import { useState } from 'react';
import freeCodeCampLogo from './images/fcc_primary_large.png'
import Button from './components/button';
import Counter from './components/counter';

function App() {

  const [countClicks, setCountClicks] = useState(0);

  const ClickScript = () => {
    setCountClicks(countClicks + 1);
  };

  const ResetClick = () => {
    setCountClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Counter countClicks={countClicks} />
        <Button
          texto='Click'
          ButtonClick={true}
          ClickScript={ClickScript}
        />
        <Button
          texto='Reset'
          ButtonClick={false}
          ClickScript={ResetClick}
        />
      </div>
    </div>
  );
}

export default App;
