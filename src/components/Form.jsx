import { useState } from "react";

const initPlanet = {
  planet: '',
  color: '',
  radius: '',
  semiMajorAxis: '',
  eccentricity: '',
  inclination: '',
  longitudeOfAscendingNode: '',
  argumentOfPeriapsis: '',
}

function Form({ addPlanet }) {

  const [planet, setPlanet] = useState({
    ... initPlanet
  });

  const handleInput = evt => {
    const target = evt.target;
    setPlanet({ ... planet, [target.name]: target.value });
  }

  const submit = () => {
    const newPlanet = { ... planet };
    newPlanet.semiMajorAxis = Number(newPlanet.semiMajorAxis);
    newPlanet.eccentricity = Number(newPlanet.eccentricity);
    newPlanet.inclination = Number(newPlanet.inclination);
    newPlanet.longitudeOfAscendingNode = Number(newPlanet.longitudeOfAscendingNode);
    newPlanet.argumentOfPeriapsis = Number(newPlanet.argumentOfPeriapsis);
    addPlanet(newPlanet);
    setPlanet({ ... initPlanet });
  }

  return (
    <div className="form-container">
      <div className="input">
        <input type="text" name="planet" value={planet?.planet} placeholder="행성이름" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="color" value={planet?.color} placeholder="색" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="radius" value={planet?.radius} placeholder="반경" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="semiMajorAxis" value={planet?.semiMajorAxis} placeholder="장반경" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="eccentricity" value={planet?.eccentricity} placeholder="이심률" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="inclination" value={planet?.inclination} placeholder="궤도 경사각" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="longitudeOfAscendingNode" value={planet?.longitudeOfAscendingNode} placeholder="승교점 경도" onChange={handleInput} />
      </div>
      <div className="input">
        <input type="text" name="argumentOfPeriapsis" value={planet?.argumentOfPeriapsis} placeholder="근일점 편각" onChange={handleInput} />
      </div>
      <div className="input">
        <button onClick={submit}>Add Planet</button>
      </div>
    </div>
  );
}

export default Form;
