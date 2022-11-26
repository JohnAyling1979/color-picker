import { useState } from 'react';
import ColorCircle from '../../components/ColorCircle/ColorCircle';
import LightnessBar from '../../components/LightnessBar/LightnessBar';
import SaturationBar from '../../components/SaturationBar/SaturationBar';
import './App.css';

function App() {
  const [color, setColor] = useState(0);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);

  return (
    <div className='app-root'>
      <div>HSL Diagram</div>
      <div className='result' style={{background: `hsl(${color}, ${saturation}%, ${lightness}%)`}}>
        {`hsl(${color}, ${saturation}%, ${lightness}%)`}
      </div>
      <ColorCircle color={color} setColor={setColor} />
      <SaturationBar color={color} saturation={saturation} setSaturation={setSaturation} />
      <LightnessBar color={color} lightness={lightness} setLightness={setLightness} />
    </div>
  );
}

export default App;
