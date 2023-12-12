import Star from './Star'
import PlanetContainer from './planet/PlanetContainer'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

function Simulator({ planets, speed }) {
  const [simulationTime, setSimulationTime] = useState(0);

  useFrame(({ clock }) => {
    // 시뮬레이션의 전체 시간을 업데이트합니다.
    setSimulationTime(clock.getElapsedTime());
  });

  const planetContainers = planets.map(p => <PlanetContainer key={p.planet} simulationTime={simulationTime} semiMajorAxis={p.semiMajorAxis} eccentricity={p.eccentricity} inclinationDegree={p.inclination} argumentOfPeriapsisDegree={p.argumentOfPeriapsis} argumentOfPeriapsis={p.argumentOfPeriapsis} radius={p.radius} color={p.color} speed={speed} />)

  return(
    <>
      <ambientLight intensity={1.0} />
      <pointLight position={[10, 10, 10]} />
      <Star radius={10} width={32} height={32} />
      <PlanetContainer simulationTime={simulationTime} semiMajorAxis={20} radius={3} speed={speed} />
      <PlanetContainer simulationTime={simulationTime} semiMajorAxis={70} eccentricity={0.2} radius={5} speed={speed} />
      <PlanetContainer simulationTime={simulationTime} semiMajorAxis={180} eccentricity={0.7} inclinationDegree={20} argumentOfPeriapsisDegree={90} radius={5} speed={speed} />
      <PlanetContainer simulationTime={simulationTime} semiMajorAxis={160} eccentricity={0.7} inclinationDegree={0} argumentOfPeriapsisDegree={0} radius={5} color="green" speed={speed} />
      {planetContainers}
      <OrbitControls />
    </>
  );
}

export default Simulator;
