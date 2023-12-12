import Simulator from './components/Simulator'
import Form from './components/Form'
import Info from './components/Info'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'

const speed = 100;

function App() {
  const [planets, setPlanets] = useState([]);
  const addPlanet = planet => {
    setPlanets([ ... planets, planet ]);
  }

  return (
    <div className="app-container">
      <div className="canvas-container">
        <Canvas camera={{ position: [120, 120, 30], fov: 60 }} style={{ backgroundColor: 'black' }}>
          <Simulator planets={planets} speed={speed} />
        </Canvas>
      </div>
      <div className="data-container">
        <Form addPlanet={addPlanet} />
        <Info planets={planets} />
      </div>
    </div>
  );
}

export default App
