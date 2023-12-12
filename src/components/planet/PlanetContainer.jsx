import { convertDegreeToRadian } from "../../tools/radian";
import Orbit from "./Orbit";
import Planet from "./Planet";

function PlanetContainer({simulationTime, semiMajorAxis, eccentricity, inclinationDegree = 0, longitudeOfAscendingNodeDegree = 0, argumentOfPeriapsisDegree = 0, radius, color, speed}) {
  const inclination = convertDegreeToRadian(inclinationDegree);
  const longitudeOfAscendingNode = convertDegreeToRadian(longitudeOfAscendingNodeDegree);
  const argumentOfPeriapsis = convertDegreeToRadian(argumentOfPeriapsisDegree);

  return (
    <Orbit semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} inclination={inclination} longitudeOfAscendingNode={longitudeOfAscendingNode} argumentOfPeriapsis={argumentOfPeriapsis}>
      <Planet simulationTime={simulationTime} color={color} semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} radius={radius} inclination={inclination} longitudeOfAscendingNode={longitudeOfAscendingNode} argumentOfPeriapsis={argumentOfPeriapsis} speed={speed} />
    </Orbit>
  )
}

export default PlanetContainer;