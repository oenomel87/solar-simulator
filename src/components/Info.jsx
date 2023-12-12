import { useEffect } from "react";

function Info({planets}) {
  const items = planets == null ? null : planets.map(planet => <li key={planet.planet}>{planet.planet}</li>)
  return (
    <ul>{items}</ul>
  );
}

export default Info;
